import { useState } from "react";

export default function NavBar(user) {
  return (
    <nav>
      <p>{user.username}</p>
      <a href="/">All Movies</a>
      <a href="/actors">Actors</a>
    </nav>
  );
}
