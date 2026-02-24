import cn from "classnames";
import { examplePlaylists } from "../../domain/playlist";
import { Link } from "react-router-dom";

export function TrackList({playlist, selectedTrack}) {
  const tracks = playlist ? examplePlaylists[playlist-1].tracks : ""
  console.log(selectedTrack)
  return (
    <>
      <h3>Playlist title</h3>
      <div className="ui very relaxed selection list">
        {playlist ? tracks.map(e => 
        <Link key={e.id} className={cn("item", { active: selectedTrack === tracks.indexOf(e)+1 })} to={`/playlists/${playlist}/${tracks.indexOf(e)+1}`} >
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
