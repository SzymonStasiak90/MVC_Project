const mongoose = require('mongoose');

const Note = mongoose.model('Note', {
    input: String
})

module.exports = Note;
