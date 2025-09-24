import {React, useState} from "react";
import noteData from "../data/noteData.js";

function NoteListComponent() {
  
  const [notes, setNotes] = useState(noteData);
  
  
 const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };


  return (
    <div>
      <h3>Note list</h3>
      {
        notes.length > 0 ?
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="text-left">{item.title}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm m-1"
                    >
                      View
                    </button>
                    <button type="button" className="btn btn-info btn-sm m-1">
                      Edit
                    </button>
                    <button
                      type="button"
                      id={`delete-btn-${index}`}
                      className="btn btn-danger btn-sm m-1"
                      onClick={()=>deleteNote(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        :
        <p>Note notes available</p>
      }
    </div>
  );
}

export default NoteListComponent;

