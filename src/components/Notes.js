import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import Notesitem from './Notesitem';
import AddNote from './AddNote';

function Notes() {

  const [note, setNote] = useState({etitle:'', edescription:'', etag:''})
  
  const onChange =(e) =>{
        setNote({...note, [e.target.name]: e.target.value})
  }
  const handleClick =(e) =>{
    console.log('updating the note', note);  
    e.preventDefault();
  }

    const context = useContext(noteContext);
    // eslint-disable-next-line
  const {notes, fetchNotes} = context;

  useEffect(() => {
    return () => {
      fetchNotes();
    }
  },[])

  const updateNote = (currentNote) =>{
    ref.current.click();
    setNote({etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag} );
  }
  const ref = useRef(null)
  return (
    <>
    <AddNote/>
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
              <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={onChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="edescription" className="form-label">Description</label>
              <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="etag" className="form-label">Tag</label>
              <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange}/>
            </div>
          </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
      </div>
    </div>
  </div>
</div>
    <div className="row">
        <h1>Your Notes</h1>
        {notes.map((notes) =>{
          return <Notesitem key={notes._id} updateNote={updateNote} notes = {notes}/>
        })}
    </div>
    </>
  )
}

export default Notes
