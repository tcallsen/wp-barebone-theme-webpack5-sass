const path = require('path');

// css extraction
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  {
    entry: {
      'main': [
        './js/src/main.js',
        './css/src/main.css'
      ]
    },
    output: {
      filename: './js/build/[name].js',
      path: path.resolve(__dirname),
      publicPath: '/wp-content/themes/wp-barebone-theme-webpack5-sass/',
    },
    module: {
      rules: [
        // css extraction
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
      ]
    },
    plugins: [
      // css extraction into dedicated file
      new MiniCssExtractPlugin({
        filename: './css/build/main.css'
      }),
    ],
  }
];
