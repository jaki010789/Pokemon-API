

const pokemonDetail = async (numpokemon) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/` + numpokemon
    );
    const data = await response.json();
    const pokeData = data.results;
    return data;
  } catch (error) {
    return [];
  }
};

export default pokemonDetail;