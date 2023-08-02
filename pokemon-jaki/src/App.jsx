import React, { useEffect } from "react";
import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import { buscarPokemon, obtDatosPokemon, obtenerPokemones } from "./api/listpoke/Index";
import Navigation from "./components/navigation/Index";
import BuscarBar from "./components/search/index";
import PokeApi from "./components/pagination/Index";
import Footer from "./components/footer/Index";
import CardPokemon from "./pages/details/Index";



export default function App() {
  const [pokemones, setPokemones] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [total, setTotal] = useState(0);
  const [Cargar, setCargar] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [buscar, setBuscar] = useState(false);



  const FetchPokemones = async () => {
    try {
      setCargar(true);
      const data = await obtenerPokemones(20, 20 * pagina);
      const promesas = data.results.map(async (pokemon) => {
        return await obtDatosPokemon(pokemon.url);
      });
      const results = await Promise.all(promesas);
      setPokemones(results);
      setCargar(false);
      setTotal(Math.ceil(data.count / 20));
      setNotFound(false);
    } catch (error) {}
  };

 
  useEffect(() => {
    if (!buscar) {
      FetchPokemones();
    }
  }, [pagina]);


  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return FetchPokemones();
    }

    setCargar(true);
    setNotFound(false);
    setBuscar(true);
    const result = await buscarPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setCargar(false);
      return;
    } else {
      setPokemones([result]);
      setPagina(0);
      setTotal(1);
    }
    setCargar(false);
    setBuscar(false);
  };
  return (
    <div>
      <Navigation />
      <div className="App">
        <BuscarBar onSearch={onSearch} />
    
      
        {notFound ? (
          <div className="not-found-text">
            No se encontro el Pokemon que buscas
          </div>
        ) : (
          <PokeApi
            Cargar={Cargar}
            pokemones={pokemones}
            pagina={pagina}
            setPagina={setPagina}
            total={total}
          />
        )}
        <Router>
        <Routes>
          <Route path="/pokemon/:id" element={<CardPokemon/>} />
        </Routes>
        </Router>
        
      </div>
      <Footer />
    </div>
  );
}
