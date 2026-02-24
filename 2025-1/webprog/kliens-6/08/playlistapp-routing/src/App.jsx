import React from 'react';
import { Playlists } from './views/playlists/Playlists';
import { Home } from './views/home/Home';
import { Tracks } from './views/tracks/Tracks';
import { Search } from './views/search/Search';
import { Menu } from './views/layout/Menu';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './views/layout/Layout';
import Proba from './proba';

export function App() {
  return (
    <div className="w-10/12 mx-auto">
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/playlists" element={<Playlists />}>
            <Route path="/playlists/:plid" element={<Playlists />}>
              <Route path="/playlists/:plid/tracks/:trid" element={<Playlists />} />
            </Route>
          </Route>
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/search" element={<Search />} />
          <Route path="/proba" element={<Proba />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  );
}