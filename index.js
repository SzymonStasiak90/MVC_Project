const express = require('express');
const app = express();
const {port} = require('./models/config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

// Zaczytanie bazy danych
require('./models/database/mongoose');
// uruchomienie parsera (obsluga danych json)
app.use(bodyParser.json());
// dodanie routingu
app.use('/api', apiRouter);
// uruchomienie servera
app.listen(port, function() {
    console.log('serwer slucha... '+ port);
})