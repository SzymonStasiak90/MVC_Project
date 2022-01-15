// Zaczytanie biblioteki mongoose
const mongoose = require('mongoose');
const {database} = require('../config')
// Polaczenie z baza danych
mongoose.connect(database, {
    useNewUrlParser: true,              // opcjonalnie
    useUnifiedTopology: true            // opcjonalnie
});


