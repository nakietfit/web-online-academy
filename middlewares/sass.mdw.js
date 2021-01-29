const sassMiddleware = require('node-sass-middleware');
const path = require('path');

module.exports = function(app) {
  app.use(sassMiddleware({
    src: path.join(__dirname, '../public/stylesheets/sass'),
    dest: path.join(__dirname, '../public/stylesheets/css'),
    debug: true,
    outputStyle: 'compressed',
    prefix: '/stylesheets/css',
  }));
};