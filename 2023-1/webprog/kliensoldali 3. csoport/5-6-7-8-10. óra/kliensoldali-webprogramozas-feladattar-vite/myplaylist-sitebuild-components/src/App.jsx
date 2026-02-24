import bj from  "../sitebuild/assets/bonjovi.jpg"
import Menu from "./Menu";
import PlaylistList from "./PlaylistList";
import TrackList from "./TrackList";
import { examplePlaylists } from "../sitebuild/domain/playlist";
import { useState } from 'react';



function App() {
  const [count, setCount] = useState(2);
  console.log(examplePlaylists)
  return (
  <>
  <Menu />
  <div className="ui container">
  <h1>My Playlists</h1>
  <div className="ui stackable two column grid">
    <PlaylistList playlist={examplePlaylists} count={count} setCount={setCount}/>
    <TrackList />
  </div>
  <div className="ui divider"></div>
  <div className="ui segment">
    <div className="ui items">
      <div className="item">
        <div className="image">
          <img src={bj} />
        </div>
        <div className="content">
          <a className="header">{"It's my life"}</a>
          <div className="meta"><span>Bon Jovi</span><span>4:35</span></div>
          <div className="extra">
            <a 
              href="https://open.spotify.com/track/0v1XpBHnsbkCn7iJ9Ucr1l" 
              className="ui button tiny green button"
            >
              <i className="spotify icon"></i>
              Listen on Spotify
            </a>
            <a 
              href="https://tabs.ultimate-guitar.com/tab/bon-jovi/its-my-life-chords-951538"
              className="ui button tiny teal button" 
            >
              <i className="microphone icon"></i>
              Show lyrics
            </a>
            <a 
              href="https://www.azlyrics.com/lyrics/bonjovi/itsmylife.html" 
              className="ui button tiny orange button" 
            >
              <i className="guitar icon"></i>
              Show chords
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="ui modal">
  <i className="close icon"></i>
  <div className="header">Add new Playlist</div>
  <div className="image content">
    <div className="description">
      <div className="ui form">
        <div className="field">
          <label>Name</label>
          <input required type="text" placeholder="My Playlist" />
        </div>
      </div>
    </div>
  </div>
  <div className="actions">
    <div className="ui black deny button">
      Cancel
    </div>
    <div className="ui positive right labeled icon button">
      Add
      <i className="plus icon"></i>
    </div>
  </div>
</div>
</>)
}

export default App;
