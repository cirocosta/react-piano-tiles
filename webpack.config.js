'use strict';

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?includePaths[]=' +
                 __dirname + '/src/style'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  }
};
