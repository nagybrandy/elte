import { Playlists } from "./playlists/Playlists";
import { Home } from "./home/Home";
import { Tracks } from "./tracks/Tracks";
import { Search } from "./search/Search";

import Layout from "./layout/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { useState } from "react";

export function App() {
  // const [page, setPage] = useState(0)
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="playlists" element={<Playlists />} >
              <Route path=":playlist" element={<Playlists />} >
                <Route path=":track" element={<Playlists />} />
              </Route>
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="tracks" element={<Tracks />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<Navigate to='/' />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
