module.exports = function(app) {
  app.use('/', require('../routes/front/home.route'));
};