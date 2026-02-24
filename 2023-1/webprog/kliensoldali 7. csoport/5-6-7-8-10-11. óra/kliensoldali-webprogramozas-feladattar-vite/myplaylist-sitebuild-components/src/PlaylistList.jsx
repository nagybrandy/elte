import cn from 'classnames/bind';

const PlaylistList = (prop) => {
  const pl = prop.playlist
  console.log(pl)
  const selectedIndexId = 2
  return (
    <div className="ui six wide column">
        <h3>Playlists</h3>
        <div className="ui very relaxed selection list">
          {pl.map(e =>{
           return (<div className={cn("item", {active: e.id===selectedIndexId})} key={e.id}>
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

export default PlaylistList