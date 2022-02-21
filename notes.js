const fs=require("fs")

const getNotes=function(){
    console.log("Notes.js is running");
}

const addNote=function(title,body){     
     const notes=loadNotes();
     const duplicateNotes=notes.filter(function(note){
          return note.title===title;
     })
     if(duplicateNotes.length===0){

        notes.push((
            {
                title:title,
                body: body
            }
        ))
        saveNotes(notes);

     }else  {
         console.log("Note Title Taken!");
     }
}

const loadNotes=function(){
    try{
        const databuffer=fs.readFileSync('notes.json');
        const dataJSON=databuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
} 


const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync("notes.json",dataJSON);
}
module.exports={
    getNotes: getNotes,
    addNote : addNote
};