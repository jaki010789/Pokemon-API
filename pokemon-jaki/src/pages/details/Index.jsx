import React from "react";
import { useState, useEffect } from "react";
import  PokemonDetail from  "../../api/details/Index"
import { useParams , useNavigate} from 'react-router-dom';


const Detallespokemon = ({ pokemon }) => {
  const [Pokemon, setPokemon] = useState({});

  const parametros = useParams();
  const navigate = useNavigate();
  const pokemonid = parametros.id;

  useEffect(() => {
    const fetchPokemonsData = async () => {
      const pokemonDetails = await PokemonDetail(pokemonid);
      setPokemon(pokemonDetails);
    };
    fetchPokemonsData();
  }, [pokemonid]);

  const volver = () => {
    navigate("/");
  };


// const Evolucionespokemon = () => {
//   const [pokemonId, setPokemonId] = useState(1);

//   useEffect(() => {
//     getEvolutions(pokemonId);
//   });

//   async function getEvolutions(id) {
//     const response = await fetch(
//     `https://pokeapi.co/api/v2/evolution-chain/${id}`
//     );
//     const data = await response.json();
//     console.log(data.chain.species.name);
//   }
// };
//   Evolucionespokemon();

  return (
    <div className="bg">
    <div className="info">
      <p>ID: {Pokemon.id}</p>
      <p> Nombre: {Pokemon.name}</p>
      <p>Experiencia: {Pokemon.base_experience}</p>
      <p>
        Peso:<br></br>
        {Pokemon.weight / 10}Kg
      </p>
      <p>Tamaño:{Pokemon.height}cm</p>
      <p>Ataque: {Pokemon.stats?.[1]?.base_stat}</p>
      <p>Velocidad: {Pokemon.stats?.[5]?.base_stat}</p>
      <p>Defensa: {Pokemon.stats?.[2]?.base_stat}</p>
      <p>Salud: {Pokemon.stats?.[0]?.base_stat}</p>
    </div>
    <div className="imagen">
      {pokemon.sprites && (
        <img>
          src={Pokemon.sprites.other.home.front_default}
            alt={`imagen de ${Pokemon.name}`}
        </img>
    )}
    </div>
    
      <button onClick={volver}>volver</button>
    </div>
  
);
};

export default Detallespokemon;