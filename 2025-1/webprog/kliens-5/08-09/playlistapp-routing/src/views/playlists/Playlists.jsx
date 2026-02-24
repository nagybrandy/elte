import { PlaylistForm } from "./PlaylistForm";
import { PlaylistList } from "./PlaylistList";
import { TrackList } from "./TrackList";
import { TrackDetails } from "./TrackDetails";
import { examplePlaylists } from "../../domain/playlist";
import { exampleTracks } from "../../domain/track";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";

export const Playlists = () => {
  const { plid, trid } = useParams()
  const navigate = useNavigate()
  console.log(plid, trid)

  /*  const [selectedPlaylistId, setSelectedPlaylistId] = useState(parseInt(plid) || 1)
   const [selectedTrackId, setSelectedTrackId] = useState(parseInt(trid) || 1) */
  const playlists = examplePlaylists;

  const selectedPlaylist = playlists.find((pl) => pl.id === parseInt(plid));
  const selectedTrack = trid ? selectedPlaylist.tracks[trid - 1] : undefined;

  const handleRouting = (plid, trid) => {
    if (trid) {
      navigate(`/playlists/${plid}/tracks/${trid}`)
    } else {
      navigate(`/playlists/${plid}`)
    }
  }
  return (
    <div>
      <div className="pb-3 pr-3 mt-5 md:flex">
        <div className="w-full p-2 overflow-hidden md:w-4/12 h-80">
          <PlaylistList
            playlists={playlists}
            selectedPlaylistId={plid}
            handleRouting={handleRouting}
          />
        </div>
        <div className="w-full p-2 md:w-8/12 h-80">
          {plid && <TrackList
            selectedPlaylist={selectedPlaylist}
            selectedTrackId={parseInt(trid)}
            handleRouting={handleRouting}
          />}
        </div>

      </div>
      {selectedTrack &&
        <div className="px-3">
          <TrackDetails selectedTrack={selectedTrack} />
        </div>
      }
    </div>
  );
};
