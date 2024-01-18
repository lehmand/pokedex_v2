function pokemonListTemplate(currentPokemon, i) {
    let name = currentPokemon.name;
    let image = currentPokemon.image;
    let id = currentPokemon.id;
    let types = currentPokemon.types;
    
    if(pokemonHasTwoTypes(types)){
        return /*html*/`
            <div class="pokemon-card" id="pokemonID${i}">
                <div class="pokemon-card-header">
                    <h1 class="pokemon-name">${name}</h1>
                    <span class="pokemon-id">#${id}</span>
                </div>
                <div class="pokemon-image-wrapper">
                    <img src="${image}" class="pokemon-image" alt="pokemon-image">
                </div>
                <div class="pokemon-types-wrapper">
                    <span class="pokemon-type" id="pokemon-type0${id}">${types[0]}</span>
                    <span class="pokemon-type" id="pokemon-type${id}">${types[1]}</span>
                </div>
            </div>
        `
    } else {
        return /*html*/`
            <div class="pokemon-card" id="pokemonID${i}">
                <div class="pokemon-card-header">
                    <h1 class="pokemon-name">${name}</h1>
                    <span class="pokemon-id">#${id}</span>
                </div>
                <img src="${image}" class="pokemon-image" alt="pokemon-image">
                <div class="pokemon-types-wrapper">
                    <span class="pokemon-type" id="pokemon-type0${id}" >${types[0]}</span>
                </div>
            </div>
        `
    }
}


