module.exports = function(app) {
  app.use('/admin', require('../routes/admin/home.route'));
  app.use('/', require('../routes/front/home.route'));
};