import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) =>{

    const notesInitial = [
        {
          "_id": "6616fc27edf2bcd913c28c51",
          "user": "660b1bbcc1e5894e0856b168",
          "title": "greeting",
          "description": "Good Night",
          "tag": "Soja Gandu",
          "date": "2024-04-10T20:52:55.343Z",
          "__v": 0
        },
        {
          "_id": "6616fc27edf2bcd913c28c52",
          "user": "660b1bbcc1e5894e0856b168",
          "title": "greeting",
          "description": "Good Night",
          "tag": "Soja Gandu",
          "date": "2024-04-10T20:52:55.343Z",
          "__v": 0
        },
        {
          "_id": "6616fc27edf2bcd913c28c53",
          "user": "660b1bbcc1e5894e0856b168",
          "title": "greeting",
          "description": "Good Night",
          "tag": "Soja Gandu",
          "date": "2024-04-10T20:52:55.343Z",
          "__v": 0
        },
        {
          "_id": "6616fc27edf2bcd913c28c54",
          "user": "660b1bbcc1e5894e0856b168",
          "title": "greeting",
          "description": "Good Night",
          "tag": "Soja Gandu",
          "date": "2024-04-10T20:52:55.343Z",
          "__v": 0
        },
        {
          "_id": "6616fc27edf2bcd913c28c55",
          "user": "660b1bbcc1e5894e0856b168",
          "title": "greeting",
          "description": "Good Night",
          "tag": "Soja Gandu",
          "date": "2024-04-10T20:52:55.343Z",
          "__v": 0
        },
        {
          "_id": "6616fc27edf2bcd913c28c56",
          "user": "660b1bbcc1e5894e0856b168",
          "title": "greeting",
          "description": "Good Night",
          "tag": "Soja Gandu",
          "date": "2024-04-10T20:52:55.343Z",
          "__v": 0
        },
        {
          "_id": "6616fc27edf2bcd913c28c57",
          "user": "660b1bbcc1e5894e0856b168",
          "title": "greeting",
          "description": "Good Night",
          "tag": "Soja Gandu",
          "date": "2024-04-10T20:52:55.343Z",
          "__v": 0
        }
      ]
      //Add a note
      const addNotes = (title,description,tag) =>{
        const note = {
          "_id": "6616fc27edf2acd913c28c59",
          "user": "660b1bbcc1e5894e0856b168",
          "title": title,
          "description":description,
          "tag": tag,
          "date": "2024-04-10T20:52:55.343Z",
          "__v": 0
        }
        setNotes(notes.concat(note));
      }
      // delete a note

      //update a note
      const [notes, setNotes] = useState(notesInitial);
    return(
        <NoteContext.Provider value={{notes, addNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;