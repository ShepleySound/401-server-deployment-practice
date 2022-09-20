'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('The server works!');
});

app.get('/bad', (req, res, next) => {
  next('Bad endpoint');
});

app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = { app, start };