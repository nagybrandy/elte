import { FaPlus as PlusIcon } from "react-icons/fa";
import { exampleTracks } from "../../storage/tracks";
import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { useState } from "react";

export function Tracks() {
  
  const [tracks, setTracks] = useState(exampleTracks);

  return (
    <div className="mt-5">
        <div className="join join-vertical w-full bg-base-300 shadow-xl overflow-x-hidden h-[80vh] pb-3 ">
          <div className="navbar join-item">
            <h2 className="join-item flex-1 text-2xl font-bold px-2">Tracks</h2>
            <button className="btn btn-neutral flex-none text-lg text-neutral-content"><PlusIcon /></button>
          </div>
          <div className="overflow-y-scroll w-full join join-vertical pl-[0.6rem]  overflow-hidden">
            {tracks.map((track) => (
                <Track track={track} key={track.id}/>
            ))}
          </div>
        </div>
        <TrackForm setTracks={setTracks} tracks={tracks} />
    </div>
  );
}
