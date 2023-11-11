import './NavBar.css'
import { useState } from "react";

export default function NavBar({ user }) {
  console.log(user)
  return (
    <nav className="nav-bar">
      <p>{user.username}</p>
      &nbsp;
      |
      &nbsp;
      <a href="/">All Movies</a>
      &nbsp;
      |
      &nbsp;
      <p>|</p>
      <a href="/actors">Actors</a>
    </nav>
  );
}
