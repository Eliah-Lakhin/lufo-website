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

const mode = process.env.NODE_ENV;
const production = mode === 'production';

module.exports = {
  mode,

  entry: {
    lufo: Path.resolve(__dirname, 'src', 'index.js'),
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
              inlineRequires: /\.md$/,
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
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    ..._(fs.readdirSync(Path.resolve(__dirname, 'src', 'pages')))
      .map(
        (filename) => {
          const parsed = filename.split('.');

          if (parsed.length <= 1) {
            return null;
          }

          return new HtmlWebpackPlugin({
            title: 'Lunar Foundation',
            filename: parsed[0] === 'index' ? 'index.html' : `${parsed[0]}/index.html`,
            template: `src/pages/${filename}`,
          });
        }
      )
      .compact()
      .value()
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
};
