import React from "react";
import "./styles.css";

// botones pasar paginas
const Paginationbutton = (props) => {
  const { onClickIzq, onClickDere, pagina, totalPaginas } = props;

 
  return (
    <div className="paginacion">
      <button className="pagina-btn" onClick={onClickIzq}>
        <div className="icon"> ◀ </div>
      </button>
      <div>
        {pagina} de {totalPaginas}
      </div>
      <button className="pagina-btn" onClick={onClickDere}>
        <div className="icon"> ▶ </div>
      </button>
    </div>
  );
};


export default Paginationbutton;
