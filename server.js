const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) =>
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    res.json(JSON.parse(data));
  })
);

app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
          title,
          text,
          id: Math.floor(Math.random() * 1000000),
        };
    
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return res.status(500).json(err);
          }
          const existingNotes = JSON.parse(data);
          existingNotes.push(newNote);
    
          fs.writeFile('./db/db.json', JSON.stringify(existingNotes, null, 4), (writeErr) =>
            writeErr
              ? res.status(500).json(writeErr)
              : res.json(`Note added successfully`)
          );
        });
      } else {
        res.status(400).json('Note title and text cannot be blank');
      }
});