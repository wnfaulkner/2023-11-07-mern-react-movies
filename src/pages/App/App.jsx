import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage.jsx";
import NavBar from "../../components/NavBar.jsx";
import MoviesListPage from "../MoviesListPage/MoviesListPage.jsx";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage.jsx";
import ActorsListPage from "../ActorsListPage/ActorsListPage.jsx";

import { movies } from "../../data.js";

export default function App() {
  
  const [user, setUser] = useState({ userLoggedIn: true, username: null });

  return (
    <main className="App">
      {user.userLoggedIn ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={<MovieDetailsPage />} />
            <Route path="/actors" element={<ActorsListPage />} />
          </Routes>
        </>
      ) : (
        <LoginPage user={user} setUser={setUser} />
      )}
    </main>
  );
}
