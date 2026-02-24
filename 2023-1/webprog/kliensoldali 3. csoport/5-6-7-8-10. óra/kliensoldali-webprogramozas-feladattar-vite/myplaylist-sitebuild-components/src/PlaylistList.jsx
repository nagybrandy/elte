import cn from 'classnames/bind';
//import { useState } from 'react';

function stateChange(id, setCount){
  setCount(id)
}

/* eslint-disable react/prop-types */
const PlaylistList = ({playlist, count, setCount}) => {
  console.log(count)
  const selectedPlId = count
  return (
    <div className="ui six wide column">
      <h3>Playlists</h3>
      <div className="ui very relaxed selection list">
      {playlist.map(e => {
        return (<div className={cn("item", {active: e.id === selectedPlId})} key={e.id} onClick={() => stateChange(e.id, setCount)}>
          <i className="large compact disc middle aligned icon"></i>
          <div className="content">
            <a className="header">{e.title}</a>
            <div className="description">{e.tracks.length} songs</div>
          </div>
        </div>)
      })}
        <div className="item" id="newPlaylist">
          <i className="large green plus middle aligned icon"></i>
          <div className="content">
            <a className="header">New</a>
            <div className="description">Create a new playlist</div>
          </div>
        </div>
      </div>
    </div>
  )
}
/* eslint-enable react/prop-types */
export default PlaylistList