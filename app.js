const chalk=require('chalk');
const notes=require('./notes.js');
const yargs= require('yargs');
const fs =  require('fs');
const { describe } = require('yargs');
const { argv } = require('process');

// add,remove,read,list

//create add command

yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder : {
        title :{
            describe : 'Note Title',
            type: 'string',
            demandOption: true
        },
        body :{
            describe : 'Body Title',
            type: 'string',
            demandOption: true
        }
     },
    handler(argv)
    {
       notes.addNote(argv.title,argv.body);
    }
})



yargs.command({
    command: 'list',
    describe:'Listing the notes',
    handler(argv)
    {
       notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe:'Reading the note',
    builder : {
        title: {
            describe : 'Note Title',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv)
    {
        notes.readNote(argv.title);
    }
})

yargs.command({
    command: 'remove',
    describe:'Remove a new note',
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type : 'string'
        }
    },
    
    handler(argv)
    {
        notes.removeNote(argv.title);
    }
})
yargs.parse();