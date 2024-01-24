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
    document.getElementById('search-value').addEventListener('input', searchPokemon);
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
    // showDetailCard(1, 0)
}

function renderPokemons(){
    let content = document.getElementById('pokemon-list');
    content.innerHTML = '';
    for(let i = 0; i < pokemonData.length; i++){
        let currentPokemon = pokemonData[i];
        content.innerHTML += pokemonListTemplate(currentPokemon, i);
        addBackgroundColor(currentPokemon, i);
    }
}

function pokemonHasTwoTypes(typesArray){
    return typesArray.length == 2;

}

function addBackgroundColor(currentPokemon, i){
    let type = currentPokemon.types[0].toLowerCase();
    let pokemonCard = document.getElementById(`pokemonID${i}`);
    let backgroundColor = typeColors[type];    
    pokemonCard.style.backgroundColor = backgroundColor;
}

function showDetailCard(id, index){
    let background = document.getElementById('pokemon-detail-card-background');
    background.classList.remove('d-none');
    background.innerHTML = '';
    background.innerHTML = detailCardHTML(index);

    changeColorsOfDetailCard(id, index);
}

function closeDetails(){
    let background = document.getElementById('pokemon-detail-card-background');
    background.classList.add('d-none');
}

async function loadMorePokemons(){
    offset += 20;
    await fetchPokemonData(offset);
}


function changeColorsOfDetailCard(id, index){
    let card = document.getElementById(`pokemon-detail-card-id${index}`)
    let type1 = pokemonData[index].types[0].toLowerCase();
    let backgroundColor = typeColors[type1];
    card.style.backgroundColor = backgroundColor;

    changeTypeColor(id, index);
}

function changeTypeColor(id, index){
    let typeArr = pokemonData[index].types;
    let type1 = pokemonData[index].types[0].toLowerCase();
    let type1Div = document.getElementById(`pokemon-type0${id}`);
    let aboutHeadline = document.getElementById(`pokemon-detail-about-headline-id${id}`);
    let basestatsHeadline = document.getElementById(`pokemon-detail-basestats-headline-id${id}`);
    let backgroundColor = typeColors[type1];
    aboutHeadline.style.color = backgroundColor;
    basestatsHeadline.style.color = backgroundColor;
    type1Div.style.backgroundColor = backgroundColor;

    if(pokemonHasTwoTypes(typeArr)){
        let type2 = pokemonData[index].types[1].toLowerCase();
        let type2Div = document.getElementById(`pokemon-type${id}${id}`);
        let backgroundColor = typeColors[type2];
        type2Div.style.backgroundColor = backgroundColor;
    }

    changeProgressBarColor(id, typeArr);
}

function changeProgressBarColor(id, typeArr){
    let type1 = typeArr[0].toLowerCase();
    let bar = document.getElementsByClassName(`bar-value${id}`);
    let statName = document.getElementsByClassName(`basestat-name${id}`);
    let backgroundColors = typeColors[type1];

    for(let i = 0; i < bar.length; i++){
        bar[i].style.backgroundColor = backgroundColors;
        statName[i].style.color = backgroundColors;
    }
}

function searchPokemon() {
    const searchTerm = document.getElementById('search-value').value.toLowerCase();
    let filteredPokemonData = pokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm));
    renderFilteredPokemons(filteredPokemonData);
  }
  
  function renderFilteredPokemons(filteredPokemonData) {
    let content = document.getElementById('pokemon-list');
    content.innerHTML = '';
    for (let i = 0; i < filteredPokemonData.length; i++) {
      let currentPokemon = filteredPokemonData[i];
      content.innerHTML += pokemonListTemplate(currentPokemon, i);
      addBackgroundColor(currentPokemon, i);
    }
  }
  
