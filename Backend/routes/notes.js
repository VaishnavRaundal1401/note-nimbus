const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Note = require("../models/Note");
const { body, validationResult } = require('express-validator');

//Get all the notes user using GET: "/api/notes/fetchnotes"
router.get('/fetchallnotes', fetchuser, async(req, res)=>{
    try {
        const notes = await Note.find({user: req.user.id});
        res.json(notes);
        
    }catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occurred");
    }
})


//Add a new note using POST: "/api/notes/addnote"
router.post('/addnote',fetchuser,[
    body('title','Enter a valid title').isLength({min: 3}),
    body('description','Enter a valid description').notEmpty().isLength({min:5}),
], async(req, res)=>{
    // console.log(req)
    try {
        const {title, description, tag} = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        }) 
        const savedNotes = await note.save();

        res.json(savedNotes);
    }catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occurred");
    } 
})

router.put('/updatenote/:id', fetchuser, async (req, res) =>{
    
    const {title, description, tag} = req.body;
    const newNote = {};
    if(title) {newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};

    //find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not Found")};
    if(note.user.toString() !== req.user.id){
        return  res.status(401).send("Not Allowed")
    }

    note = await Note.findByIdAndUpdate(req.params.id, {$set:newNote}, {new:true});
    res.json({note});
})

router.delete('/deletenote/:id', fetchuser, async (req, res) =>{
    
    // const {title, description, tag} = req.body;

    //find the note to be deleted and delete it
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not Found")};

    //allow deletion if user owns this note 
    if(note.user.toString() !== req.user.id){
        return  res.status(401).send("Not Allowed")
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({"Success":"Note has been deleted", note:note});
})
module.exports = router;