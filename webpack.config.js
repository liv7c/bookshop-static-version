const path = require('path');

module.exports = {
  entry: {
    App: './app/assets/scripts/App.js',
  },
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: 'App.js' //to keep filename dynamic
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ["env"]
        },
        exclude: /node_modules/
      }
    ]
  }
}
