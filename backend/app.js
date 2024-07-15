const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookie = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

/** create router here*/
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**create middleware and http server */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'),
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
//create function using morgan middleware for http login
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookie());
app.use(express.static(path.join(__dirname, 'public')));


//create error
app.use(function (req, res, next) {
    next(createError(404));
});

/**error handling */
app.use((error, req, res, next) => {
    res.locals.message = error.message;
    res.locals.error = req.app.get('env') === 'success' ? error: {};
    res.status(error.status || 500);
    res.render('error');
});



//register routes in localhost:4000
app.use('/', indexRouter);
app.use('/routes/user', userRouter);


module.exports = app;

