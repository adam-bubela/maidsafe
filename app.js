var express = require('express');
var path = require('path');
var session = require('express-session')
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/app', express.static(__dirname + '/app/'));
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});




module.exports = app;

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server http://%s:%s", host, port)

})
