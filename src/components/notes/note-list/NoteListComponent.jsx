import { React, useState, useEffect } from "react";
import styles from "./notelist.module.css";
import EditNoteModal from "../EditNoteModal/EditNoteModal";

function NoteListComponent({ notes, onDeleteNote, onUpdateNote }) {
  const [openRows, setOpenRows] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState([]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", body: "" });

  const toggleExpandedRow = (index) => {
    if (openRows.includes(index)) {
      setOpenRows(openRows.filter((item) => item != index));
      return;
    }
    setOpenRows([...openRows, index]);
  };

  const toggleSelectedRow = (index) => {
    if (selectedRowIndex.includes(index)) {
      setSelectedRowIndex(selectedRowIndex.filter((item) => item != index));
      return;
    }
    setSelectedRowIndex([...selectedRowIndex, index]);
  };

  const handleIsCompleted = (index, note) => {
    onUpdateNote(index, { ...note, isCompleted: !note.isCompleted });
  };

  return (
    <div>
      <h3>Note list</h3>
      {notes.length > 0 ? (
        <>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th></th>
                <th></th>
                <th scope="col">Title</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((item, index) => {
                return (
                  <tr key={index}>
                    <td
                      className="text-center"
                      onClick={() => toggleExpandedRow(index)}
                      style={{ cursor: "pointer" }}
                    >
                      {openRows.includes(index) ? " ▲ " : " ▼ "}
                    </td>

                    <td>
                      <input
                        type="checkbox"
                        onChange={() => toggleSelectedRow(index)}
                      />
                    </td>

                    <td className="text-left">
                      <h4
                        className={`${
                          item.isCompleted ? styles.strikethrough : ""
                        }`}
                        onClick={() => handleIsCompleted(index, item)}
                      >
                        {item.title}
                      </h4>
                      <div
                        className={`${styles.dropdown}  ${
                          openRows.includes(index) ? styles.open : ""
                        }`}
                      >
                        <p>{item.body}</p>
                      </div>
                    </td>
                    <td style={{ minWidth: "200px" }}>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm m-1"
                      >
                        View
                      </button>

                      <button
                        type="button"
                        className="btn btn-info btn-sm m-1"
                        onClick={() => {
                          setEditIndex(index);
                          setEditForm({ title: item.title, body: item.body });
                          setIsEditModalOpen(true);
                        }}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        id={`delete-btn-${index}`}
                        className="btn btn-danger btn-sm m-1"
                        onClick={() => {
                          setSelectedRowIndex(
                            selectedRowIndex.filter((item) => item != index)
                          );
                          onDeleteNote([index]);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <EditNoteModal 
            isOpen={isEditModalOpen}
            editForm={editForm}
            onChange={setEditForm}
            onClose={()=> setIsEditModalOpen(false)}
            onSave={()=>{
              onUpdateNote(editIndex,{
                title: editForm.title,
                body: editForm.body
              });
              setIsEditModalOpen(false);
            }}
          />
        </>
      ) : (
        <p>Note notes available</p>
      )}

      <div
        className={`${styles.deleteSelected} ${
          selectedRowIndex.length ? styles.visible : ""
        }`}
      >
        <button
          onClick={() => {
            onDeleteNote(selectedRowIndex);
            setSelectedRowIndex([]);
          }}
        >
          Delete Selected
        </button>
      </div>
    </div>
  );
}

export default NoteListComponent;
