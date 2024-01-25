import React , { useContext } from 'react';
import noteContext from '../context/noteContext';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const { note, updateNote } = props;
  return (
    <div className='col-md-3'>
      <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <p className='text text-end text-primary'>{note.tag}</p>
            <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}> Delete</i> 
            <i className="fa-solid fa-pen-nib mx-2" onClick={()=>{updateNote(note)}}> Edit</i> 
          </div>
      </div>
    </div>
  )
}

export default Noteitem
