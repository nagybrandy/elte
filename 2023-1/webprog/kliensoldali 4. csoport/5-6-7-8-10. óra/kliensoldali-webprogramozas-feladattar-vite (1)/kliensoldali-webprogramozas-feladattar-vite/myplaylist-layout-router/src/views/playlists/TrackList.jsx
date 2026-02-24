import cn from "classnames";
import { examplePlaylists } from "../../domain/playlist";
import { Link } from "react-router-dom";

export function TrackList({selectedPlaylistId, trackId}) {
  const tracks = examplePlaylists?.[selectedPlaylistId-1]?.tracks
  return (
    <>
      <h3>Playlist title</h3>
      <div className="ui very relaxed selection list">
      {selectedPlaylistId ? 
      tracks.map(e=> 
       <Link key={e.id} className={cn("item", { active: trackId === tracks.indexOf(e)+1 })} to={`/playlists/${selectedPlaylistId}/${ tracks.indexOf(e)+1}`}>
          <i className="large music middle aligned icon"></i>
          <div className="content">
            <div className="header">{e.title}</div>
            <div className="description">{e.artist}</div>
          </div>
        </Link>) : ""}
      </div>
    </>
  );
}
