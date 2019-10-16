const _ = require('lodash');
const Path = require('path');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const marked = require("marked");

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
          'html-loader',
          {
            loader: 'markdown-loader',
            options: {
              gfm: true,
              renderer: new marked.Renderer(),
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
