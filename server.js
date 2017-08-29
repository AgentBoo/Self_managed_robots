// NOTE: Modules
const express = require('express'),
      mustacheExpress = require('mustache-express');

// Routers
const robotsRouter = require('./controllers/robots.js'),
      loginRouter = require('./controllers/login.js'),
      signupRouter = require('./controllers/signup.js');

// NOTE: Express app
const app = express();

// Templating engine
      app.engine('mustache', mustacheExpress()),
      app.set('view engine', 'mustache'),
      app.set('views', './views');

// Middleware, routes
      app.use('/public', express.static('public'));
      app.use('/', robotsRouter);
      app.use('/', loginRouter);
      app.use('/', signupRouter);

// Route handlers
      app.get('/', (req, res) => { res.redirect('/index'); });

// Listen to port 3000
      app.listen(3000, () => { console.log('Wagakki Band: Senbonzakura') });
