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
          body: JSON.stringify({title, description, tag}),
        });
        // const json = response.json();

        // const note = {
        //   "_id": "6616fc27edf2acd913c28c59",
        //   "user": "660b1bbcc1e5894e0856b168",
        //   "title": title,
        //   "description":description,
        //   "tag": tag,
        //   "date": "2024-04-10T20:52:55.343Z",
        //   "__v": 0
        // }
        // setNotes(notes.concat(note));
      }
      // delete a note
      const deleteNote = (id) =>{
        const newNote = notes.filter((note) =>{return note._id !== id});
        setNotes(newNote);
      }
      

      //update a note
      const updateNotes = async (id, title, description, tag) =>{
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYjFiYmNjMWU1ODk0ZTA4NTZiMTY4In0sImlhdCI6MTcxMjE4MjY3MX0.VjiKEh-ueZP1OOxwAFoEQZ0UImS7op0IRV0fsXKm42Q",
          },
          body: JSON.stringify({title, description, tag}),
        });
        const json = response.json();
        // For Client Side
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id === id)
            {
              element.title = title;
              element.description = description;
              element.tag = tag;
            }
        }
      }
    return(
        <NoteContext.Provider value={{notes, addNotes, deleteNote, updateNotes, fetchNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;