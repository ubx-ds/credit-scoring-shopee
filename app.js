'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var express = require('express');
const path = require('path');

module.exports = app; // for testing

require('dotenv').config();

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);
  app.set('views', __dirname + '/views');
  app.use(express.static(path.join(__dirname, 'views')));
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');

  app.use('/', require('./api/routes'));

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
