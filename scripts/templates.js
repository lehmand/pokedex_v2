function pokemonListTemplate(currentPokemon) {
    let name = currentPokemon.name;
    let image = currentPokemon.image;
    let id = currentPokemon.id;
    let types = currentPokemon.types;
    debugger;
    return /*html*/`
        <div class="pokemon-card">
            <h1>${name}</h1>
            <img src="${image}" alt="">
            <span></span>
        </div>
    `
}