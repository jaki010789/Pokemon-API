import React from "react";
import "./styles.css";

const Navigation = () => {
  let imagen =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div />
      <div>
        <img src={imagen} alt="pokeApi-img" className="navbar-imagen" />
      </div>
      
    </nav>
  );
};

export default Navigation;
