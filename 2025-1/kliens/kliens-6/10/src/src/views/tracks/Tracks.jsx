import { exampleTracks } from "../../domain/track";
import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { FaPlus as PlusIcon } from "react-icons/fa";
import { Modal } from "react-daisyui";
import { useState } from "react";
import { useGetAllTracksQuery, useAddNewTrackMutation } from "../../store/playlistsApi";

export function Tracks() {
  const [open, setOpen] = useState(false)
  const {
    Dialog,
    handleShow
  } = Modal.useDialog();

  const { data : tracks, error, isFetching, isLoading } = useGetAllTracksQuery()
  const [addNewTrack, { data, isError, isSuccess }] = useAddNewTrackMutation()

  
  const [edit, setEdit] = useState(undefined)
  
  const handleClick = ()=> {
    setOpen(true)
  }

  const handleSave = (newtrack, edit) => {
    if(!edit){
      addNewTrack(newtrack)
    } 
    else {
    const ind = tracks.findIndex(track => track.id === newtrack.id);
    setEdit(undefined)
    }

    setOpen(false)
  }

  const handleDelete = (trackId) => {
    const ind = tracks.findIndex(track => track.id === trackId);
    setTracks([
          ...tracks.slice(0, ind),
          ...tracks.slice(ind+1)
      ])
  }

  const handleEdit = (track) => {
    setOpen(true)
    setEdit(track)
  }

  if(isFetching || isLoading){
    return <span className="loading loading-spinner loading-xl"></span>
  }
  
  if(error) {
    return <div>Error: {error.data.message}</div>
  }
    
  return (
    <div className="mt-5">
        <div className="join join-vertical w-full bg-base-300 shadow-xl overflow-x-hidden h-[80vh] pb-3 ">
          <div className="navbar join-item">
            <h2 className="flex-1 px-2 text-2xl font-bold join-item">Tracks</h2>
            <button className="flex-none text-lg btn btn-neutral text-neutral-content" onClick={handleClick}><PlusIcon /></button>
          </div>
          <div className="overflow-y-scroll w-full join join-vertical pl-[0.6rem]  overflow-hidden">
            {tracks?.data?.map((track) => (
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
          />
    </div>
  );
}
