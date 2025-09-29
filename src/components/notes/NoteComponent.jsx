import React, { useState } from 'react'
import NoteListComponent from './note-list/NoteListComponent'
import NoteFormComponent from './note-form/NoteFormComponent'
import noteData from "../../data/noteData";

function NoteComponent() {

  const  [notes, setNotes] = useState(noteData);

  const addNote= (newNote) =>{
    var added = [...notes, newNote]
    setNotes(added)
  }

   const deleteNote = (indexArr) => {
    let updatedNotes = notes.filter((_, index) => !indexArr.includes(index));
    setNotes(updatedNotes);
  };

  const updateNote  = (index, newNote) =>{
      let updated = [...notes];
      updated[index] = newNote;
      setNotes(updated);
  }



  return (
    <>
        <NoteListComponent notes={notes} onDeleteNote={deleteNote} onUpdateNote = {updateNote}/>
        <NoteFormComponent onNoteAdd = {addNote} />
    </>
  )
}

export default NoteComponent