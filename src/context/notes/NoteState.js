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
          "_id": "6616fc27edf2bcd913c28c51",
          "user": "660b1bbcc1e5894e0856b168",
          "title": "greeting",
          "description": "Good Night",
          "tag": "Soja Gandu",
          "date": "2024-04-10T20:52:55.343Z",
          "__v": 0
        },
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
          "_id": "6616fc27edf2bcd913c28c51",
          "user": "660b1bbcc1e5894e0856b168",
          "title": "greeting",
          "description": "Good Night",
          "tag": "Soja Gandu",
          "date": "2024-04-10T20:52:55.343Z",
          "__v": 0
        },
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
          "_id": "6616fc27edf2bcd913c28c51",
          "user": "660b1bbcc1e5894e0856b168",
          "title": "greeting",
          "description": "Good Night",
          "tag": "Soja Gandu",
          "date": "2024-04-10T20:52:55.343Z",
          "__v": 0
        },
        {
          "_id": "6616fc27edf2bcd913c28c51",
          "user": "660b1bbcc1e5894e0856b168",
          "title": "greeting",
          "description": "Good Night",
          "tag": "Soja Gandu",
          "date": "2024-04-10T20:52:55.343Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial);
    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;