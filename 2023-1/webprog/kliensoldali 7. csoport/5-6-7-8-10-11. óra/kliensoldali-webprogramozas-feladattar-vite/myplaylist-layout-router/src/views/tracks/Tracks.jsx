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
  const [formState, useFormState] = useState(defaultState)
  const [tracks, useTracks] = useState(exampleTracks);
  const [open, setOpen] = useState(false);
  const [editedTrack, setEditedTrack] = useState(false);

  useEffect(() => {
    console.log(tracks)
  }, [tracks])

  // event handlers
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    useFormState(defaultState)
    setEditedTrack(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleClose()
    const newtrack = formState
    if(!editedTrack){
      newtrack.id = Math.random().toString()
      useTracks([...tracks, newtrack])
    } else {
      const index = tracks.indexOf(editedTrack)
      useTracks([
        ...tracks.slice(0, index),
          newtrack,
        ...tracks.slice(index+1)
      ])
      setEditedTrack(false)
    }
  }

  const handleDelete = (track) => {
    useTracks(tracks.filter(e => e !== track))
  }

  const handleChange = (track) => {
    setOpen(true)
    setEditedTrack(track)
  }
  return (
    <>
      <div className="ui container">
        <button href="#" className="ui right floated green button" id="newModal" onClick={handleOpen}>
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
              <Track key={track.id} track={track} handleDelete={handleDelete} handleChange={handleChange} />
            ))}
          </tbody>
        </table>

      </div>
      <TrackForm 
            open={open} 
            setOpen={setOpen} 
            handleClose={handleClose} 
            handleSubmit={handleSubmit} 
            formState={formState} 
            useFormState={useFormState}
            editedTrack={editedTrack}
            />
    </>
  );
}
