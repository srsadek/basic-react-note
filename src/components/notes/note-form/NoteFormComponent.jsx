import React, { useState } from "react";
import styles from "./noteform.module.css";

function NoteFormComponent({onNoteAdd}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);
  
  const clearForm =(e) =>{
    e.preventDefault();
    setTitle("");
    setDescription("");
    setShowForm(false);
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(title.trim() && description.trim()){
      onNoteAdd({title, description});
      setTitle("");
      setDescription("");
      setShowForm(false);
    }
  }


  return (
    <div className={styles.createNoteContainer}>
      <button 
        onClick={()=> setShowForm(true)}
        disabled ={showForm? true:false}
        >Create New Note</button>
      
      <form action="" 
        onSubmit={handleSubmit}
        className={`${showForm?styles.showForm : ''}`}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className={styles.formBtns}>
          <button
            type="submit"
            className={`${styles.btnAddNote} ${styles.formButton}`}
          >
            Add Note
          </button>
          <button
            className={`${styles.btnCancelNote} ${styles.formButton}`}
            onClick={clearForm}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteFormComponent;
