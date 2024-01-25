const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser"); // importing fetchuser from middleware/fetchuser
const Note = require("../models/Note"); // importing Notes from models/User folder
const { body, validationResult } = require("express-validator"); // importing express-validator



// Route 1 :  Get all the notes using  GET "/api/notes/fetchallnotes", login required

router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    // catching an error if occurred.
    console.error(error.message);
    res.status(500).send("Internal Server error occurred!");
  }
})

// Route 2 :  Add a new notes using  POST "/api/notes/addnote", login required

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid description of 5 characters").isLength({ min: 5 }),], async (req, res) => {
      try {
        const { title, description, tag, } = req.body;
        // if there are errors, return bad request or errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
          title,
          description,
          tag,
          user: req.user.id,
        });
        const saveNote = await note.save()
        res.json(saveNote)

      } catch (error) {
        // catching an error if occurred.
        console.error(error.message);
        res.status(500).send("Internal Server error occurred!");
      }
    }
);



// Route 3 :  Update an exisiting notes using  PUT "/api/notes/updatenote", login required


router.put(
  "/updatenote/:id",
  fetchuser, async (req, res) => {
    const {title, description, tag} = req.body;
    // Try and catch statement allow us to define a block of code to be tested for errors while it is being executed.
    try {
    // Create a NewNote object 
    const newNote = {};
    if(title) {   // agar title hai to title show hoga
      newNote.title = title;
    }
    if(description) {   // agar description hai to description show hoga
      newNote.description = description;
    }
    if(tag) {   // agar tag hai to tag show hoga
      newNote.tag = tag;
    }
    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if(!note) {    // agar note nai hai then error will be executed
      return res.status(404).send("Not Found");
    }
    if(note.user.toString() !== req.user.id) {    // aur agar note.user nay hai jo request kiya gaya hai from req.user.id se then ye error show hoga
      return res.status(401).send("UnAuthorize Access, Not Allowed");
    }
    note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true})
    res.json({note});
  } catch (error) {
    // catching an error if occurred.
    console.error(error.message);
    res.status(500).send("Internal Server error occurred!");
  }
    });




// Route 4 :  Deleting an exisiting notes using  DELETE "/api/notes/deletenote", login required


router.delete(
  "/deletenote/:id",
  fetchuser, async (req, res) => {
    try {
    // Find the note to be deleted and delete it
    let note = await Note.findById(req.params.id);
    if(!note) {
      return res.status(404).send("Not Found");
    }
    // Allow deletion only if user own this Note
    if(note.user.toString() !== req.user.id) {
      return res.status(401).send("UnAuthorize Access, Not Allowed");
    }
    note = await Note.findByIdAndDelete(req.params.id)
    res.json({"Success" : "Note has been deleted", note: note});
  } catch (error) {
    // catching an error if occurred.
    console.error(error.message);
    res.status(500).send("Internal Server error occurred!");
  }
    });


module.exports = router;
