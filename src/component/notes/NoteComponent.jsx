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

   const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };



  return (
    <>
        <NoteListComponent notes={notes} onDeleteNote={deleteNote}/>
        <NoteFormComponent onNoteAdd = {addNote}/>
    </>
  )
}

export default NoteComponent