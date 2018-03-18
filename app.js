var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./app_api/models/db.js');    //adding this calls app_api/models/db.js and results in connection to databas


var routes = require('./app_server/routes/index'); //note: bb updated this though not asked to
var users = require('./app_server/routes/users'); //according to pg 67
//var routes= require('./app_server/routes/users'); //note: bb added this. whole line was not here. seems to work without it

var routesApi= require('./app_api/routes/index');  //added 3:19 to create routing for API call




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views')); //bb updated according to pg 66
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.use('/api',routesApi);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
