// Wczytanie biblioteki express
const express = require('express');
// Polaczenie API routing
const router = express.Router();

const actionType = require('../controllers/note_actions');

// Pobieranie notatek
router.get('/notes', actionType.getAllNotes)
// Pobieranie notatki
router.get('/notes/:id', actionType.getNote)
// Zapisywanie notatek
router.post('/notes', actionType.saveNote)
// Edytowanie notatek
router.put('/notes/:id', actionType.updateNote)
// Usuwanie notatek
router.delete('/notes/:id', actionType.deleteNote)


module.exports = router;