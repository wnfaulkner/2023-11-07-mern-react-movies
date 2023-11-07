import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage.jsx";
import NavBar from "../../components/NavBar.jsx";
import MoviesListPage from "../MoviesListPage/MoviesListPage.jsx";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage.jsx";
import ActorsListPage from "../ActorsListPage/ActorsListPage.jsx";

export default function App() {
  
  const [user, setUser] = useState({ userLoggedIn: null, username: null });

  return (
    <main className="App">
      {user.userLoggedIn ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorsListPage />} />
          </Routes>
        </>
      ) : (
        <LoginPage user={user} setUser={setUser} />
      )}
    </main>
  );
}
