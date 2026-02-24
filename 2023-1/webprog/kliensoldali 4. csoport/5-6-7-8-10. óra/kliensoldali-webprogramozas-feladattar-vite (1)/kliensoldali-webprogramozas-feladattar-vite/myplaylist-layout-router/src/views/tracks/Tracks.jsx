import { exampleTracks } from "../../domain/track";
import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { useState, useEffect } from "react";

const defaultState = {
  artist: "",
  title: "",
  length: "",
  thumbnailURL: "",
  spotifyURL: "",
  chordsURL: "",
  lyricsURL: "",
};

export function Tracks() {
  const [open, setOpen] = useState(false)
  const [tracks, setTracks] = useState(exampleTracks);
  const [formState, setFormState] = useState(defaultState)
  const [editTrack, setEditTrack] = useState(false)
  
  useEffect(()=>{
    console.log(tracks)
  }, [tracks])
  
  // event handlers
  const handleOpen = ()=> {
    setOpen(true)
    setFormState(defaultState)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newtrack = formState
    if(!editTrack){
      newtrack.id = Math.random().toString()
      setTracks([...tracks, newtrack])
    } else {
      const index = tracks.findIndex(e => e.id === editTrack.id)

      setTracks([...tracks.slice(0,index),
        newtrack,
        ...tracks.slice(index+1)])
    }
    
    
    handleClose()
    setEditTrack(false)
  }

  const handleClose = ()=> {
    setOpen(false)
    setEditTrack(false)
  }

  const handleDelete = (track) => {
    setTracks(tracks.filter(e => e.id !== track.id))
  }

  const handleEdit = (track)=> {
    const temp = {...defaultState, ...track}
    setEditTrack(temp)
    setFormState(temp)
    setOpen(true)
  }

  return (
    <>
      <div className="ui container">
        <button href="#" className="ui right floated green button" id="newModal" onClick={handleOpen} >
          <i className="plus icon"></i>
          New track
        </button>
        <h1>Tracks</h1>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <Track key={track.id} track={track} handleDelete={handleDelete} handleEdit={handleEdit}/>
            ))}
          </tbody>
        </table>
      </div>

      <TrackForm open={open} handleClose={handleClose} formState={formState} setFormState={setFormState} handleSubmit={handleSubmit} editTrack={editTrack} />
    </>
  );
}
