var path = require('path');

module.exports = {
  devtool:"source-map",
  mode: 'development',
  entry: './index.js',
  output: {
   // path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
         }
      ]
   }
};
