var path = require('path');


module.exports = {
  entry: {
    javascript: path.join(__dirname, 'src/js/main.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: path.join(__dirname, 'src/js'),
        loader: 'babel-loader',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      }
    ]
  }
};
