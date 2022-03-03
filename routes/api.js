const router = require('express').Router();
// Get should read db.json and return all saved notes as JSON
router.get('/notes', (req, res) => {
    readFile('db/db.json').then((data) => res.json(JSON.parse(data)));
});
// Post should receive a new note to save on the request body, add it to the db.json file and then return the new note to the client (notes need a unique ID - find an npm package that will do this)

//BONUS add DELETE /api/notes/:id, will need to read all notes from the db.json file, remove the note by using the ID, then rewrite the notes to the db.json file

module.exports = router;