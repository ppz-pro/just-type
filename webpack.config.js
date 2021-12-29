const Path = require('path')

module.exports = {
  entry: './src/entry/index.js',
  output: {
    filename: 'index.js',
    path: Path.resolve(__dirname, 'app/dist')
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }, {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  }
}