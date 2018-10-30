module.exports = {
  entry: './app.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',

      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        query: {compact: true}
      }
    ]
  }
};
