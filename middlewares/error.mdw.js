module.exports = function(app) {
  app.use(function(req, res) {
    res.render('errors/404');
  });
  
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.render('errors/500');
  });
};