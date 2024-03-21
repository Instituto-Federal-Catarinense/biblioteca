var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fornecedoresRouter = require('./routes/fornecedores');
var coisaRouter = require('./routes/coisa');



var app = express();

const mongoose = requise("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://Gabriel:01102005@cluster0.ncklj51.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//mongodb+srv://Gabriel:<password>@cluster0.ncklj51.mongodb.net//

main().catch((err) => console.log(err));
async function main(){
  await mongoose.connect(mongoDB);
}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fornecedores', fornecedoresRouter)
app.use('/Coisa', coisaRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
