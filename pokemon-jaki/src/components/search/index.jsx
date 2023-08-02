import React from "react";
import "./styles.css";
import { useState } from "react";

const BuscarBar = (props) => {

  const { onSearch } = props;
  const [Buscar, setBuscar] = useState("");


  const onChange = (e) => {
    setBuscar(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async () => {
    onSearch(Buscar);


  };

  return (
    <div className="searchbar-container">

      <div className="searchbar">
        <input placeholder="Buscar pokemon..." onChange={onChange} />
        <button className="buscar-btn" onClick={onClick}>Buscar</button>
      </div>


    </div>
  );
};

export default BuscarBar;
