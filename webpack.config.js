const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ] 
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
      
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'dist')
  }
}
