import React from 'react';
import './EditNoteModal.css';


const EditNoteModal = ({isOpen, editForm, onChange, onClose, onSave}) => {
  if (!isOpen) return null;
  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Note</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Title</label>
              <input
                className="form-control"
                type="text"
                value={editForm.title}
                onChange={(e) => onChange({ ...editForm, title: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Body</label>
              <textarea
                className="form-control"
                rows="4"
                value={editForm.body}
                onChange={(e) => onChange({ ...editForm, body: e.target.value })}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={onSave}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNoteModal;
