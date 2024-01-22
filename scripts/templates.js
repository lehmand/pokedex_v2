function pokemonListTemplate(currentPokemon, i) {
    let name = currentPokemon.name;
    let image = currentPokemon.image;
    let id = currentPokemon.id;
    let types = currentPokemon.types;
    
    if(pokemonHasTwoTypes(types)){
        return /*html*/`
            <div class="pokemon-card" id="pokemonID${i}" onclick="showDetailCard(${i})">
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
            <div class="pokemon-card" id="pokemonID${i}" onclick="showDetailCard(${i})">
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

function detailCardHTML(index){
    let name = pokemonData[index].name;
    let id = pokemonData[index].id;
    let image = pokemonData[index].image;
    let types = pokemonData[index].types;
    let abilities = pokemonData[index].abilities;
    return /*html*/`
        <div class="pokemon-detail-card-wrapper">
            <div class="pokemon-detail-card" id="pokemon-detail-card-id${id}">
                <div class="pokemon-detail-card-header">
                    <h1 class="pokemon-detail-card-name">${name}</h1>
                    <span class="pokemon-detail-card-id">#${id}</span>
                </div>
                <div class="pokemon-detail-card-image-wrapper">
                    <img src="${image}" class="pokemon-detail-card-image">
                </div>
                <div class="pokemon-detail-card-info-wrapper">
                    <div class="pokemon-detail-card-types-wrapper">
                        <span class="pokemon-detail-card-type">${types[0]}</span>
                        <span class="pokemon-detail-card-type">${types[1]}</span>
                    </div>
                    <h2 class="about-headline">About</h2>
                    <div class="pokemon-detail-card-biometrics-wrapper">
                        <div class="pokemon-detail-card-biometric-info">
                            <span class="pokemon-detail-card-biometric">Weigth</span>
                        </div>
                        <div class="vertical-line"></div>
                        <div class="pokemon-detail-card-biometric-info">
                            <span class="pokemon-detail-card-biometric">Height</span>
                        </div>
                        <div class="vertical-line"></div>
                        <div class="pokemon-detail-card-biometric-info">
                            <span class="pokemon-detail-card-biometric">Moves</span>
                        </div>
                    </div>
                    <h2 class="basestats-headline">Base Stats</h2>
                    <div class="pokemon-detail-card-basestats-wrapper">

                    </div>
                </div>
            </div>
        </div>
    `
}


