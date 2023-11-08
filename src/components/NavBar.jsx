import './NavBar.css'
import { useState } from "react";

export default function NavBar(user) {
  return (
    <nav className="nav-bar">
      <p>{user.username}</p>
      <a href="/">All Movies</a>
      <p>|</p>
      <a href="/actors">Actors</a>
    </nav>
  );
}
