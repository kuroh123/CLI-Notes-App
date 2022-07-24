const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    savedNote(notes);
    console.log(chalk.green("New note added"));
  } else {
    console.log("Title already taken!");
  }
};

const savedNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const buffer = fs.readFileSync("notes.json");
    const stringData = buffer.toString();
    return JSON.parse(stringData);
  } catch (error) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNoteList = notes.filter((note) => note.title !== title);
  savedNote(newNoteList);

  if (notes.length > newNoteList.length) {
    console.log(chalk.green("Note Removed!"));
  } else {
    console.log(chalk.red("No Note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.white.inverse("YOUR NOTES"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((note) => note.title === title);
  if (foundNote) {
    console.log(chalk.green.inverse(foundNote.title));
    console.log(foundNote.body);
  } else {
    console.log(chalk.red.inverse("No Note found!"));
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNotes,
};
