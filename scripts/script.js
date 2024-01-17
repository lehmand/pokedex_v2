const pokemonData = [];
function init(){
    fetchPokemonData();
}

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
    renderPokemons();
}

const fetchPokemonDetails = async (pokemon) => {
    try {
        const response = await fetch(pokemon.url);
        const pokemonDetails = await response.json();
        return {
            id: pokemonDetails.id,
            name: (pokemon.name).charAt(0).toUpperCase() + (pokemon.name).slice(1),
            height: pokemonDetails.height,
            weigth: pokemonDetails.weight,
            image: pokemonDetails.sprites.other['official-artwork'].front_default,
            types: pokemonDetails.types.map(type => type.type.name),
            abilities: pokemonDetails.abilities.map(ability => ability.ability.name),
            stats: pokemonDetails.stats.map(stat => {
                return {
                    name: stat.stat.name,
                    value: stat.base_stat
                };
            })
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

function renderPokemons(){
    let content = document.getElementById('pokemon-list');
    content.innerHTML = '';
    for(let i = 0; i < pokemonData.length; i++){
        let currentPokemon = pokemonData[i];
        content.innerHTML += pokemonListTemplate(currentPokemon);
    } 
}