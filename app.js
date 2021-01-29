const express = require('express');
require('express-async-errors');

const app = express();

app.use(express.urlencoded({
  extended: true,
}));
require('./middlewares/sass.mdw')(app);
app.use('/public', express.static('public'));

require('./middlewares/view.mdw')(app);
require('./middlewares/session.mdw')(app);
require('./middlewares/local.mdw')(app);
require('./middlewares/route.mdw')(app);
require('./middlewares/error.mdw')(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});