import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import Notesitem from './Notesitem';

function Notes() {
    const context = useContext(noteContext);
    // eslint-disable-next-line
  const {notes, setNotes} = context;
  return (
    <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((notes) =>{
          return <Notesitem key={notes._id} notes = {notes}/>
        })}
    </div>
  )
}

export default Notes
