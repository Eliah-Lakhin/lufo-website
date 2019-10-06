const Path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
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
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
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
        ]
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: Path.resolve(__dirname, 'src', 'static'),
        to: '.',
      },
    ]),
    new HtmlWebpackPlugin({
      title: 'Lunar Foundation',
    }),
  ],

  optimization: {
    minimize: true,
  },
};
