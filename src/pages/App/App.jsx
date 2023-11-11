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
  
  const [user, setUser] = useState({ userLoggedIn: true, username: 'TEST USER (CHANGE IN APP.JS)' });
 //console.log(user)
  return (
    <main className="App">
      {user.userLoggedIn ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} user={user} setUser={setUser} />} />
            <Route path="/movies/:movieName" element={<MovieDetailsPage user={user} setUser={setUser}/>} />
            <Route path="/actors" element={<ActorsListPage movies={movies} user={user} setUser={setUser} />} />
          </Routes>
        </>
      ) : (
        <LoginPage user={user} setUser={setUser} />
      )}
    </main>
  );
}
