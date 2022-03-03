const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Get should read db.json and return all saved notes as JSON
router.get('/notes', (req, res) => {
    fs.readFile('db/db.json', function(err, data) {
        if(err) throw err;
        res.json(JSON.parse(data))
    });
});

// Post should receive a new note to save on the request body, add it to the db.json file and then return the new note to the client (notes need a unique ID - find an npm package that will do this)
router.post('/notes', (req, res) => {
    let newNote = req.body;
    newNote.id = uuidv4();
    fs.readFile('db/db.json', function(err, data) {
        if(err) throw err;
        let notes = JSON.parse(data);

        notes.push(newNote);

        fs.writeFile('db/db.json', JSON.stringify(notes), function(err) {
            if (err) throw err;
        })
    });

    res.json(newNote);
});

//BONUS add DELETE /api/notes/:id, will need to read all notes from the db.json file, remove the note by using the ID, then rewrite the notes to the db.json file


// router.delete('/notes/:id', (req, res) => {
//     let makePath = path.join(__dirname, 'db/db.json');
//     for (let i=0; i < database.length; i++) {
//         if([i].id === req.params.id) {
//             database.splice(i, 1);
//             break;
//         }
//     };
    
//     fs.writeFileSync(makePath, JSON.stringify(db/db.json), function(err) {
//         if (err) throw err;
//     });

//     res.json(db/db.json);
    
// });

module.exports = router;