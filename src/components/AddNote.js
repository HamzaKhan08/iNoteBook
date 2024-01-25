import React, { useContext, useState } from 'react';  
import noteContext from '../context/noteContext';

const AddNote = () => {

  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""})
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""});
  }
  const onchange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <div className='container my-3'>
      <h2>Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" value={note.title} id="title" name='title' aria-describedby="emailHelp" onChange={onchange} />
          <div id="emailHelp" className="form-text">Make a Title that tell's a lot</div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" value={note.description} id="description" name='description' onChange={onchange} />
          <div id="emailHelp" className="form-text">Make a attractive description</div>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" value={note.tag} id="tag" name='tag' onChange={onchange} />
          <div id="emailHelp" className="form-text">Give tag for your note</div>
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn rounded-2 btn-primary" onClick={handleClick}>Add Note</button>
      </form>
      </div>
  )
}

export default AddNote;
