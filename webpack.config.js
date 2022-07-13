const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ['./client/index.js'],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  // devServer: {
  //   host: 'localhost',
  //   port: 8080,
  //   // enable HMR on the devServer
  //   hot: true,
  //   // fallback to root for other urls
  //   historyApiFallback: true,
  //   proxy: {
  //     '/api/leaders': {
  //       target: 'http://localhost:3000',
  //       secure: false,
  //     },
  //   },
  // },
};
