const path = require('path');

// css extraction
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            filename: './css/build/fonts/[name][ext]',
          }
        },
        // loader for images and icons (only required if css references images)
        {
          test: /\.(png|jpg|gif)$/,
          type: 'asset/inline'
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
