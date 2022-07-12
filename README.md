## Webpack 5 Barebones WordPress Theme

Provides a sample barebones WordPress theme that features a webpack 5 build for CSS/SASS and JavaScript. The webpack configuration is defined in the [webpack.config.js](./webpack.config.js), and the compiled assets are included in the WordPress theme via code in the [functions.php](./functions.php).

## Development

After deploying and enabling the theme on a WordPress instance (see *Deploying the Theme* section below), install the theme dependencies by running the following command in the theme root (e.g. `/wp-content/themes/wp-barebones-theme-webpack5-sass`):

```
npm install
```

## Build

Various build commands are available that execute the webpack 5 builds:

- `npm run build` - development webpack build (`webpack --mode development`).
- `npm run dist` - production webpack build, with code minification enabled (`webpack --mode production`).
- `npm run watch` - development watch command.

## Deploying the Theme

This theme can be downloaded and deployed into a WordPress instance's themes directory (i.e. `/wp-content/themes`). Once the theme is deployed, run the build commands (`npm install` and `npm run dist`) to install and build the JavaScript and CSS.

### Symlinking to Theme

It may be helpful during development to create a symlink in the WordPress theme's directory that points to a local copy of this repository. An symlink may look like:

```
ln -s /code-directory/wp-barebone-theme-webpack5-sass /var/www/html/wp-content/themes/wp-barebone-theme-webpack5-sass
```

## Blog Post

Check out a blog post I created that describes configuring webpack to work with WordPress in more detail: [https://taylor.callsen.me/using-webpack-5-and-sass-with-wordpress/](https://taylor.callsen.me/using-webpack-5-and-sass-with-wordpress/)