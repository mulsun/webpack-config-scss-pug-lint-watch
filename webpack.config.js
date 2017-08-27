var webpack = require('webpack');
const path = require('path');
const stylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: __dirname + "/src/main.js",
  output: {
    path: __dirname + "/docs/assets/js/",
    filename: "app.js"
  },
  plugins: [
    new stylelintPlugin({
      configFile: '.stylelintrc',
      context: 'src/',
      files: ['*.scss'],
      failOnError: false,
      quiet: false,
    })
  ],
};