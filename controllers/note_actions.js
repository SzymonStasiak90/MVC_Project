// Wczytanie modelu obiektow z bazy danych
const Note = require('../models/note_schema');

class ActionType {

    // pobieranie wszystkich notatek
    async getAllNotes(req, res) {
        const allDocuments = await Note.find({});
            res.status(200).json(allDocuments);
    }

    // pobieranie jednej notatki
    async getNote(req, res) {
        const id = req.params.id;
        const singleDocument = await Note.findOne({ _id: id});
        res.status(200).json(singleDocument);
    }

    // zapisywanie notatki
    async saveNote(req, res) {
        const input = req.body.input;
        const addedNote = new Note({input});
        await addedNote.save();
        res.status(201).json(addedNote);
    }

    // update notatki
    async updateNote(req, res) {
        const id = req.params.id;
        const input = req.body.input;
        const updateNote = await Note.findOne({_id: id});
        updateNote.input = input;
        await updateNote.save();
        res.status(201).json(updateNote);
    }

    // usuniecie notatki
    async deleteNote(req, res) {
        const id = req.params.id;
        await Note.deleteOne({_id: id});
        res.status(204).json();
    }
}

module.exports  = new ActionType();

