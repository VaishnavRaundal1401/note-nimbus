import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) =>{

    const host = "http://localhost:5000"
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    //Fetch all Notes
    const fetchNotes = async() =>{
      //API call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYjFiYmNjMWU1ODk0ZTA4NTZiMTY4In0sImlhdCI6MTcxMjE4MjY3MX0.VjiKEh-ueZP1OOxwAFoEQZ0UImS7op0IRV0fsXKm42Q"
        }
      });
      const json = await response.json();
      console.log(json);
      setNotes(json);
    }

      //Add a note
      const addNotes = async(title,description,tag) =>{
        //API call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYjFiYmNjMWU1ODk0ZTA4NTZiMTY4In0sImlhdCI6MTcxMjE4MjY3MX0.VjiKEh-ueZP1OOxwAFoEQZ0UImS7op0IRV0fsXKm42Q",
          },
          body: JSON.stringify({title, description, tag})
        });
        const note = await response.json();
        setNotes(notes.concat(note));
      }


      // delete a note
      const deleteNote = async(id) =>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYjFiYmNjMWU1ODk0ZTA4NTZiMTY4In0sImlhdCI6MTcxMjE4MjY3MX0.VjiKEh-ueZP1OOxwAFoEQZ0UImS7op0IRV0fsXKm42Q",
          },
        });
        const json = response.json();
        console.log(json);
        const newNote = notes.filter((note) =>{return note._id !== id});
        setNotes(newNote);
      }
      

      //update a note
      const updateNotes = async (id, title, description, tag) =>{
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYjFiYmNjMWU1ODk0ZTA4NTZiMTY4In0sImlhdCI6MTcxMjE4MjY3MX0.VjiKEh-ueZP1OOxwAFoEQZ0UImS7op0IRV0fsXKm42Q",
          },
          body: JSON.stringify({title, description, tag}),
        });
        const json = response.json();
        console.log(json);
        // For Client Side
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id === id)
            {
              newNotes[index].title = title;
              newNotes[index].description = description;
              newNotes[index].tag = tag;
              break;
            }
        }
        setNotes(newNotes);
      }
    return(
        <NoteContext.Provider value={{notes, addNotes, deleteNote, updateNotes, fetchNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;