

import {MdLibraryMusic as PlIcon} from "react-icons/md"

export function PlaylistList({ playlists, selectedPlaylistId, handleRouteChange }) {
  return (
    <div className="w-full h-full shadow-xl join join-vertical bg-base-300">
      <h2 className="p-3 text-2xl font-bold join-item">Playlists</h2>
      <div className="overflow-y-scroll join join-vertical w-full pl-[0.6rem] overflow-hidden">
      {playlists.map((playlist) => (
          <div 
              key={playlist.id}
              className={`btn border-0 rounded-lg items-start p-3 hover:bg-base-200 ${selectedPlaylistId === playlist.id ? "bg-base-200" : "bg-base-300"}`} 
              onClick={() => handleRouteChange(playlist.id, undefined)}
          >
            <div className="flex px-5 w-[100%]">
              <div className="w-8/12 font-bold text-left">
                <PlIcon className="inline mr-2" />{playlist.title}
              </div>
              <div className="w-4/12 text-right">{playlist.tracks.length} songs</div>
            </div>
          </div>
      ))}
      </div>
    </div>
  );
}
