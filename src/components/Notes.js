import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import Notesitem from './Notesitem';
import AddNote from './AddNote';

function Notes(props) {

  const [note, setNote] = useState({id:"", etitle:'', edescription:'', etag:''})
  
  const onChange =(e) =>{
        setNote({...note, [e.target.name]: e.target.value})
  }

  const context = useContext(noteContext);
  const {notes, fetchNotes, updateNotes} = context;

  useEffect(() => {
    return () => {
      fetchNotes();
    }
  },[])

  const updateNote = (currentNote) =>{
    ref.current.click();
    setNote({id:currentNote._id, etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag});
  }
  const handleClick =(e) =>{
    console.log('updating the note', note);  
    updateNotes(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click();
    props.showAlert('Note updated successfully', 'success');
  }
  const ref = useRef(null)
  const refClose = useRef(null)
  return (
    <>
    <AddNote showAlert={props.showAlert} />
<button  type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="etitle" className="form-label">Title</label>
              <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" minLength={5} required onChange={onChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="edescription" className="form-label">Description</label>
              <input type="text" className="form-control" id="edescription" name='edescription' minLength={5} required value={note.edescription} onChange={onChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="etag" className="form-label">Tag</label>
              <input type="text" className="form-control" id="etag" name='etag' minLength={5} required value={note.etag} onChange={onChange}/>
            </div>
          </form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button disabled = {note.etitle.length < 5 || note.edescription.length < 5}  type="button" className="btn btn-outline-success" onClick={handleClick}>Update Note</button>
      </div>
    </div>
  </div>
</div>
    <div className="row">
        <h1>Your Notes</h1>
        <div className="container">
          {notes.length === 0 && 'No notes to display'}
        </div>
        {notes.map((notes) =>{
          return <Notesitem key={notes._id} updateNote={updateNote} notes = {notes} showAlert={props.showAlert} />
        })}
    </div>
    </>
  )
}

export default Notes
