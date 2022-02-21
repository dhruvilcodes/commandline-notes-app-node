const chalk=require('chalk');
const notes=require('./notes.js');
const yargs= require('yargs');
const { describe } = require('yargs');
const { argv } = require('process');
const fs =  require('fs');


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
    handler : function(argv)
    {
       notes.addNote(argv.title,argv.body);
    }
})



yargs.command({
    command: 'list',
    describe:'Listing the notes',
    handler : function()
    {
        console.log(`Listing a new note!!`);
    }
})

yargs.command({
    command: 'read',
    describe:'Reading the note',
    handler : function()
    {
        console.log(`Reading a new note!!`);
    }
})

yargs.command({
    command: 'remove',
    describe:'Remove a new note',
    
    handler : function()
    {
        console.log(`Removing the note!!`);
    }
})
yargs.parse();