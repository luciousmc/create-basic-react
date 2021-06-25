require('dotenv/config');
const path = require('path');

const publicPath = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: publicPath,
    historyApiFallback: true,
    host: 'localhost',
    port: process.env.DEV_SERVER_PORT,
    stats:'minimal',
    watchContentBase: true
  }
}