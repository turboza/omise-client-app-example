var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'script.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  }
};
