import React from 'react';
import { Playlists } from './views/playlists/Playlists';
import { Menu } from './views/layout/Menu';
import { Home } from './views/home/Home'
import { Routes, Route } from 'react-router';
import { Tracks } from './views/tracks/Tracks';
import { Search } from './views/search/Search';
import { Layout } from './views/layout/Layout';
import { Provider } from 'react-redux'
import store from './store/store'
import People from './views/sw/People';
export function App() {
  return (
    <Provider store={store}>  
      <div className="w-10/12 mx-auto">
        <Layout>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<Playlists />}>
            <Route path="/playlists/:plid" element={<Playlists />} />
            <Route path="/playlists/:plid/tracks/:trid" element={<Playlists />} />
          </Route>
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Home />} />
          <Route path="/sw" element={<People />} />
        </Routes>
        </Layout >
      </div>
    </Provider>
  );
}