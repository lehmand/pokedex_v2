const pokemonData = [];

let limit = 20;
let offset = 0;

let typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
};

function init(){
    fetchPokemonData();
}

const fetchPokemonData = async (offset) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
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
    renderPokemons()
}

const fetchPokemonDetails = async (pokemon) => {
    try {
        const response = await fetch(pokemon.url);
        const pokemonDetails = await response.json();
        return {
            id: pokemonDetails.id,
            name: (pokemon.name).charAt(0).toUpperCase() + (pokemon.name).slice(1),
            height: pokemonDetails.height,
            weight: pokemonDetails.weight,
            image: pokemonDetails.sprites.other['official-artwork'].front_default,
            types: pokemonDetails.types.map(types => (types.type.name).charAt(0).toUpperCase() + (types.type.name).slice(1)),
            abilities: pokemonDetails.abilities.map(abilities => (abilities.ability.name).charAt(0).toUpperCase() + (abilities.ability.name).slice(1)),
            stats: pokemonDetails.stats.map(stats => {
                return {
                    name: (stats.stat.name).toUpperCase(),
                    value: stats.base_stat
                }
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
    // showDetailCard(0)
}

function renderPokemons(){
    let content = document.getElementById('pokemon-list');
    content.innerHTML = '';
    for(let i = 0; i < pokemonData.length; i++){
        let currentPokemon = pokemonData[i];
        content.innerHTML += pokemonListTemplate(currentPokemon, i);
        changeTypeColor(currentPokemon.id, currentPokemon.types);
    }
}

function pokemonHasTwoTypes(typesArray){
    return typesArray.length == 2;

}

function changeTypeColor(id, types){
    let type1 = types[0].toLowerCase();
    let type1Div = document.getElementById(`pokemon-type0${id}`);
    let type1BackgroundColor = typeColors[type1];
    type1Div.style.backgroundColor = type1BackgroundColor;

    if(pokemonHasTwoTypes(types)){
        let type2 = types[1].toLowerCase();
        let type2Div = document.getElementById(`pokemon-type${id}`);
        let type2BackgroundColor = typeColors[type2];
        type2Div.style.backgroundColor = type2BackgroundColor;
    }

}

function showDetailCard(index){
    let background = document.getElementById('pokemon-detail-card-background');
    background.classList.remove('d-none');
    background.innerHTML = '';
    background.innerHTML = detailCardHTML(index);

    changeColorsOfDetailCard(index);
}

function closeDetails(){
    let background = document.getElementById('pokemon-detail-card-background');
    background.classList.add('d-none');

}

async function loadMorePokemons(){
    offset += 20;
    await fetchPokemonData(offset);
}


function changeColorsOfDetailCard(index){
    let card = document.getElementById(`pokemon-detail-card-id${index}`)
    let type1 = pokemonData[index].types[0].toLowerCase();
    let backgroundColor = typeColors[type1];

    card.style.backgroundColor = backgroundColor;
}