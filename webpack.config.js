var getConfig = require('hjs-webpack');

var config = getConfig({
  isDev: process.env.NODE_ENV !== "production",
  in: 'src/react_formulate.jsx',
  out: 'dist',
  output: {
    filename: 'bundle.js',
    cssFilename: 'styles.css'
  },
  clearBeforeBuild: true
});

module.exports = config;
