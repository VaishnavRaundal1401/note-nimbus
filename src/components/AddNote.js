import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'

function AddNote() {
  
  const context = useContext(noteContext);
  const {addNotes} = context;

  const [note, setNote] = useState({title:'', description:'', tag:'Default'})
  
  const onChange =(e) =>{
        setNote({...note, [e.target.name]: e.target.value})
  }
  const handleClick =(e) =>{
    e.preventDefault();
    addNotes(note.title, note.description, note.tag);
  }

  return (
    <div>
      <div className="container my-3">
      <h1>Add Notes</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name='description' onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name='tag' onChange={onChange}/>
          </div>
          <button type="submit" className="btn btn-outline-primary" onClick={handleClick} >Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default AddNote
