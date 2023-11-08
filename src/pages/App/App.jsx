import "./App.css";
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage.jsx'
import MoviesListPage from '../MoviesListPage/MoviesListPage.jsx'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage.jsx'

export default function App() {
  const [user, setUser] = useState(true)
  return (
    <main className="App">
      { user ?
        <Routes>
          <Route path="/movies" element={<MoviesListPage />} /> 
          <Route path="/movies/:movie_id" element={<MovieDetailPage />} /> 
        </Routes>
        :
        <LoginPage />
      }
    </main>
  )
}
