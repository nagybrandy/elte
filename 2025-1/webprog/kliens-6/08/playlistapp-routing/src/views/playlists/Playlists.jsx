import { PlaylistForm } from "./PlaylistForm";
import { PlaylistList } from "./PlaylistList";
import { TrackList } from "./TrackList";
import { TrackDetails } from "./TrackDetails";
import { examplePlaylists } from "../../domain/playlist";
import { exampleTracks } from "../../domain/track";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export const Playlists = () => {
  const { plid, trid } = useParams()
  const navigate = useNavigate()
  console.log(plid, trid)

  const playlists = examplePlaylists;
  const selectedPlaylist = playlists.find((pl) => pl.id === parseInt(plid));
  const selectedTrack = selectedPlaylist?.tracks[trid - 1];

  const handleRouteChange = (plid, trid) => {
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
            selectedPlaylistId={parseInt(plid)}
            handleRouteChange={handleRouteChange}
          />
        </div>
        <div className="w-full p-2 md:w-8/12 h-80">
          {selectedPlaylist && <TrackList
            selectedPlaylist={selectedPlaylist}
            selectedTrackInd={parseInt(trid)}
            handleRouteChange={handleRouteChange}
          />}
        </div>
      </div>
      <div className="px-3">
        {selectedTrack && <TrackDetails selectedTrack={selectedTrack} />}
      </div>
    </div>
  );
};
