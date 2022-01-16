const express = require('express');
const app = express();
const {port} = require('./models/config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors'); // biblioteka zezwala na polaczenie backendu z frontem na innym porcie
const router = require('./routes/api');
const note_actions = require('./controllers/note_actions');

// fix na corss issue
app.use(cors());
// Zaczytanie bazy danych
require('./models/database/mongoose');
// uruchomienie parsera (obsluga danych json)
app.use(bodyParser.json());
// dodanie routingu
app.use('/api', apiRouter);



// dodanie frontu  - ejs
app.set('view engine','ejs');
app.get('/',(req,res) => {

    const notes = note_actions;

    // const notes = [{
    //     input: 'Test Article'
    // }]

  res.render('index', {notes:notes})
})


app.get('/notes')



// dodanie frontu  - css
app.use(express.static('views'));









// uruchomienie servera
app.listen(port, function() {
    console.log('serwer slucha... '+ port);
})