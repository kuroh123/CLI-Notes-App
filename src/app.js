const {
  readNotes,
  listNotes,
  removeNote,
  addNote,
  getNotes,
} = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");
const { demand, demandOption } = require("yargs");

//customize yargs version
yargs.version("1.1.0");
const helloWorld = () => {
  return {
    hello: "World",
  };
};

helloWorld();

//create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Write something...",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

//create a list command
yargs.command({
  command: "list",
  describe: "list all notes",
  handler() {
    listNotes();
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    readNotes(argv.title);
  },
});

yargs.parse();
