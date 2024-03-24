import React from "react";
import DarkMode from "../DarkMode/DarkMode";

import "./Navbar.css";
import FireIcon from "../../assets/fire.png";
import StarIcon from "../../assets/glowing-star.png";
import PartyIcon from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Moviemaniac</h1>
      <div className="navbar_links">
        <DarkMode />
        <a href="#popular">
          Popular{" "}
          <img src={FireIcon} alt="File emoji" className="navbar_emoji" />
        </a>
        <a href="#top_rated">
          Top Rated{" "}
          <img src={StarIcon} alt="Star emoji" className="navbar_emoji" />
        </a>
        <a href="#upcoming">
          Upcoming{" "}
          <img src={PartyIcon} alt="Party emoji" className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
