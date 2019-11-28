require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const flash = require("connect-flash");
const app = express();

require('./configs/mongoose.config')
require('./configs/middlewares.config')(app)
require('./configs/locals.config')(app)
require('./configs/preprocessor.config')(app)
require('./configs/debug.config')
//require("./configs/debug.config");


hbs.registerHelper('ifUndefined', (value, options) => {
  if (arguments.length < 2)
    throw new Error("Handlebars Helper ifUndefined needs 1 parameter");
  if (typeof value !== undefined) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});


// Enable authentication using session + passport
app.use(session({
  secret: 'irongenerator',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  })
}))
app.use(flash());
require('./passport')(app);


//RUTAS 
app.use('/', require('./routes/index.routes'));
app.use('/auth', require('./routes/auth.routes'));
app.use('/movies', require('./routes/movies.routes'));
app.use('/events', require('./routes/events.routes'));


module.exports = app;