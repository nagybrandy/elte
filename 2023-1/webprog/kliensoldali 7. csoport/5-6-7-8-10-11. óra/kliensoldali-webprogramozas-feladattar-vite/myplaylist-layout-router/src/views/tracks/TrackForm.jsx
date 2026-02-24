// import { useEffect, useState } from "react";
import { useEffect } from "react";
import { Modal } from "semantic-ui-react";

/* eslint-disable react/prop-types */
const Field = ({ label, placeholder, name, value, handleInput, ...attr}) => {
  /* const [value, setValue] = useState()
  const handleInput = (e)=>{
    setValue(e.target.value)
    console.log(e.target.value)
  } */
  return (
    <div className="field">
      <label>{label}</label>
      <input value={value} name={name} onInput={handleInput} type="text" placeholder={placeholder} {...attr} />
    </div>
  );
};



export function TrackForm({open, handleClose, formState, useFormState, handleSubmit, editedTrack}) {
  
  const handleInput = (e)=>{
    useFormState({...formState, [e.target.name] : e.target.value})
  }

  useEffect(()=> {
    if(editedTrack){
      useFormState(editedTrack)
    }
  }, [editedTrack])

  //console.log(setOpen)
  return (
    <Modal as="form" 
           className="ui modal"
           open={open} 
           onClose={handleClose}
           onSubmit={handleSubmit}>
            
      <i className="close icon" onClick={handleClose}></i>
      <div className="header">{editedTrack ? `Edit track: ${editedTrack.title}` :  "Add new Track"}</div>
      <div className="image content">
        <div className="description">
          <div className="ui form">
            <div className="three fields">
              <Field value={formState.artist} handleInput={handleInput} label="Author" placeholder="John Williams" name="artist" required/>
              <Field value={formState.title} handleInput={handleInput} label="Track name" placeholder="Imperial March" name="title" required/>
              <Field value={formState.length} handleInput={handleInput} label="Length" placeholder="3:44" name="length" required/>
            </div>
            <div className="three fields">
              <Field value={formState.spotifyURL} handleInput={handleInput} label="Spotify URL" placeholder="https://" name="spotifyURL" />
              <Field value={formState.lyricsURL}  handleInput={handleInput}label="Lyrics URL" placeholder="https://" name="lyricsURL" />
              <Field value={formState.chordsURL} handleInput={handleInput} label="Guitar tab URL" placeholder="https://" name="chordsURL" />
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="ui black deny button" onClick={handleClose}>Cancel</div>
        <button className="ui positive right labeled icon button" >
          {editedTrack ? "Edit" : "Add"}
          <i className="plus icon"></i>
        </button>
      </div>
    </Modal>
  );
}
