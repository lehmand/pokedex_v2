const pokemonData = [];

const fetchPokemonData = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
        const data = await response.json();
        await processPokemonData(data.results);
    } catch(error){
        console.error('Error, could not load pokemon data...', error);
    }
}

const processPokemonData = async (pokemonList) => {
    for(const pokemon of pokemonList){
        const pokemonInfo = await fetchPokemonDetails(pokemon);
        await addPokemonDetailsToGlobal(pokemonInfo);
    }
}

const fetchPokemonDetails = async (pokemon) => {
    try {
        const response = await fetch(pokemon.url);
        const pokemonDetails = await response.json();
        console.log(pokemonDetails);
        return {
            id: pokemonDetails.id,
            name: pokemon.name,
            height: pokemonDetails.height,
            weigth: pokemonDetails.weight,
            image: pokemonDetails.sprites.other['official-artwork'].front_default,
            types: pokemonDetails.types.map(types => types.type.name),
            abilities: pokemonDetails.abilities.map(abilities => abilities.ability.name),
            stats: pokemonDetails.stats.map(stats => stats)
        }
    } catch(error){
        console.log('Could not load pokemon details', error);
    }
}

const addPokemonDetailsToGlobal = async (pokemonInfo) => {
    if(pokemonInfo){
        pokemonData.push(pokemonInfo);
    }
}


fetchPokemonData();