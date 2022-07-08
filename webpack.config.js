const path = require('path');

// css extraction and minification
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = [
  {
    entry: {
      'main': [
        './js/src/main.js',
        './css/src/main.scss'
      ]
    },
    output: {
      filename: './js/build/[name].js',
      path: path.resolve(__dirname),
      publicPath: '/wp-content/themes/wp-barebone-theme-webpack5-sass/',
    },
    module: {
      rules: [
        // js babelization
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // sass compilation
        {
          test: /\.(sass|scss)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        // loader for webfonts (only required if loading custom fonts)
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: './css/build/font/[name][ext]',
          }
        },
        // loader for images and icons (only required if css references image files)
        {
          test: /\.(png|jpg|gif)$/,
          type: 'asset/resource',
          generator: {
            filename: './css/build/img/[name][ext]',
          }
        },
      ]
    },
    plugins: [
      // css extraction into dedicated file
      new MiniCssExtractPlugin({
        filename: './css/build/main.css'
      }),
    ],
    optimization: {
      // minification - only performed when mode = production
      minimizer: [
        // js minification - special syntax enabling webpack 5 default terser-webpack-plugin 
        `...`,
        // css minification
        new CssMinimizerPlugin(),
      ]
    },
  }
];
