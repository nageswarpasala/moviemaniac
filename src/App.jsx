import React from "react";

import "./App.css";
import FireIcon from "./assets/fire.png";
import StarIcon from "./assets/glowing-star.png";
import PartyIcon from "./assets/partying-face.png";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movielist/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <MovieList type="popular" emoji="Fire Icon" icon={FireIcon} />
        <MovieList type="top_rated" emoji="Star Icon" icon={StarIcon} />
        <MovieList type="upcoming" emoji="Party Icon" icon={PartyIcon} />
      </main>
    </div>
  );
};

export default App;
