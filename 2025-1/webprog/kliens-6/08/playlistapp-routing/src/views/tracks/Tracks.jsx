import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { FaPlus as PlusIcon } from "react-icons/fa";
import { Modal } from "react-daisyui";
import { useEffect, useState } from "react";
import useTracks from "./useTracks";

export function Tracks() {
  const {
    Dialog,
    handleShow
  } = Modal.useDialog();
    
  const [tracks, setTracks] = useTracks();
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState(undefined)
  
  const handleSave = (newtrack) => {
    if(edit) {
      const ind = tracks.findIndex(e => e.id === newtrack.id)
      setTracks([
          ...tracks.slice(0, ind),
          newtrack,
          ...tracks.slice(ind+1)
        ])
    } else {
      setTracks([...tracks, newtrack])
    }
    setOpen(false)
  }

  const handleDelete = (trid) => {
    setTracks(tracks.filter(e => e.id !== trid))
  }

  const handleEdit = (trid) => {
    setEdit(tracks.find(e => e.id === trid))
    setOpen(true)
  }
  
  const handleClose = ()=> {
    setOpen(false)
    setEdit(undefined)
  }
  
  return (
    <div className="mt-5">
      <div className="join join-vertical w-full bg-base-300 shadow-xl overflow-x-hidden h-[80vh] pb-3 ">
        <div className="navbar join-item">
          <h2 className="flex-1 px-2 text-2xl font-bold join-item">Tracks</h2>
          <button className="flex-none text-lg btn btn-neutral text-neutral-content" onClick={() => setOpen(true)}><PlusIcon /></button>
        </div>
        <div className="overflow-y-scroll w-full join join-vertical pl-[0.6rem]  overflow-hidden">
          {tracks.map((track) => (
            <Track track={track} key={track.id} handleDelete={handleDelete} handleEdit={handleEdit}/>
          ))}
        </div>
      </div>
      <TrackForm 
        Dialog={Dialog} 
        setOpen={setOpen} 
        open={open} 
        handleSave={handleSave} 
        edit={edit}
        handleClose={handleClose}
      />
    </div>
  );
}
