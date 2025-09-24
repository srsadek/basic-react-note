import React from "react";
import   styles from  "./noteform.module.css";

function NoteFormComponent() {
  let title, description;
  let sh = true;
  let show = sh? styles.show: "";
  return (
    <div className={styles.createNoteContainer}>
      <button>Create New Note</button>
    <form action="" className={show}>
      <input type="text" placeholder="Title" value={title} />
      <textarea type="text" placeholder="Description" value={description} />
      <div className={styles.formBtns}>
        <button type="submit" className={`${styles.btnAddNote} ${styles.formButton}`}>Add Note</button>
        <button type="submit" className={`${styles.btnCancelNote} ${styles.formButton}`}>Cancel</button>
      </div>
    </form>
    </div>
  );
}

export default NoteFormComponent;
