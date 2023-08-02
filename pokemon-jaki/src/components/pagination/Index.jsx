import React from "react";
import Paginationbutton from "../paginationbutton/Index";
import Pokemon from "../../pages/main/Index";


const PokeApi= (props) => {
  const { pokemones, pagina, setPagina, total, Cargar } = props;

//funcion cambiar de pagina
  const UltimaPagina= () => {
    const nextpage= Math.max(pagina - 1, 0);

    setPagina(nextpage);
  };

  const sgtePagina = () => {
    const nextpage = Math.min(pagina + 1, total - 1);
    setPagina(nextpage);
  
   
  };

  return (
    <div>
      <div className="header">
        <h1>PokeApi</h1>
        <Paginationbutton
        
          pagina={pagina + 1}
          totalPaginas={total}
          onClickIzq={UltimaPagina}
          onClickDere={sgtePagina}
        />
      </div>
      
      {Cargar ? (
        <div>Cargando pokemones...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemones.map((pokemon) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default PokeApi;
