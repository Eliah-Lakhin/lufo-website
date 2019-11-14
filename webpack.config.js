const _ = require('lodash');
const Path = require('path');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const marked = require('marked')
const Viz = require('viz.js')
const vizRenderer = require('viz.js/full.render.js');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const config = require('./config.json');

const mode = process.env.NODE_ENV;
const production = mode === 'production';

module.exports = {
  mode,

  entry: {
    index: Path.resolve(__dirname, 'src', 'scripts', 'index.js'),
    slides: Path.resolve(__dirname, 'src', 'scripts', 'slides.js'),
  },

  output: {
    path: Path.resolve(__dirname, 'docs'),
    filename: '[name].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader',
            options: {
              helperDirs: Path.resolve(__dirname, 'src', 'helpers'),
              partialDirs: Path.resolve(__dirname, 'src', 'partials'),
              inlineRequires: /\.(md|png|jpe?g|gif|svg)$/,
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
          {
            loader: 'posthtml-loader',
            options: {
              plugins: [
                (() => {
                  return function(tree, callback) {
                    const promises = []

                    tree.match({ tag: 'dot' }, (node) => {
                      const viz = new Viz({
                        Module: vizRenderer.Module,
                        render: vizRenderer.render,
                      });

                      const engine = node.attrs.engine || 'dot';

                      delete node.attrs.engine;

                      promises.push(viz
                        .renderString(node.content[0], {
                          engine
                        })
                        .then((svg) => {
                          Object.assign(node, {
                            tag: 'img',
                            attrs: {
                              ...node.attrs,
                              src: `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`,
                            },
                            content: '',
                          });
                        }));

                        return node;
                    });

                    Promise
                      .all(promises)
                      .then(() => callback(), (err) => callback(err));
                  };
                })(),
              ],
            }
          },
          {
            loader: 'markdown-loader',
            options: {
              gfm: true,
              renderer: (() => {
                const renderer = new marked.Renderer();
              
                renderer.code = ((fallback) => function(code, language) {
                  const chunks = (language || '').match(/^(\S+)(\s+(.+))?/);

                  if (!chunks || !chunks.length) {
                    return fallback.apply(this, arguments);
                  }

                  const lang = chunks[1];
                  const attrString = chunks[3];

                  if (lang !== 'dot') {
                    return fallback.apply(this, arguments);
                  }

                  return `<dot ${attrString}>${code}</dot>`;
                })(renderer.code);

                renderer.link = ((fallback) => function(href, title, text) {
                  if (!href.match(/^http/)) {
                    return fallback.apply(this, arguments);
                  }

                  return `<a href="${href}" target="_blank"${title ? ` title="${title}"` : ''}>${text}</a>`;
                })(renderer.link);
              
                return renderer;
              })(),
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import'),
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
      },
    ],
  },

  plugins: [
    ...production ? [new CleanWebpackPlugin()] : [],
    new CopyPlugin([
      {
        from: Path.resolve(__dirname, 'src', 'static'),
        to: '.',
      },
    ]),
    new FaviconsWebpackPlugin('./src/images/logo.png'),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    ...(() => {
      function parseDir(path) {
        let chunk = path
          .replace(/\.[\/]/g, '')
          .replace(/\\|\//g, '-');

        if (chunk === '.') {
          chunk = 'index';
        }

        return _(fs.readdirSync(Path.resolve(__dirname, 'src', 'pages', path)))
        .map(
          (filename) => {
            const parsed = filename.split('.');

            if (parsed.length === 0) {
              return null;
            }

            if (parsed.length === 1) {
              return parseDir(`${path}/${parsed[0]}`);
            }

            return [new HtmlWebpackPlugin({
              filename: parsed[0] === 'index'
                ? `${path}/index.html`
                : `${path}/${parsed[0]}/index.html`,
              template: `src/pages/${path}/${filename}`,
              templateParameters: {
                ...config,
                production: production,
                development: !production,
              },
              chunks: [chunk]
            })];
          }
        )
        .compact()
        .flatten()
        .value();
      }

      return parseDir('.');
    })()
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
};
