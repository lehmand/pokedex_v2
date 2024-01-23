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
    let stats = pokemonData[index].stats;
    return /*html*/`
        <div class="pokemon-detail-card-wrapper">
            <div class="pokemon-detail-card" id="pokemon-detail-card-id${id}">
                <div class="pokemon-detail-card-header">
                    <h1 class="pokemon-detail-card-name">${name}</h1>
                    <span class="pokemon-detail-card-id">#${id}</span>
                </div>
                <div class="pokemon-detail-card-image-wrapper">
                    <img src="${image}" class="pokemon-detail-card-image">
                    <img src="./assets/icons/pokeball.svg" alt="" class="pokemon-detail-card-pokeball">
                </div>
                <div class="pokemon-detail-card-info-wrapper">
                    <div class="pokemon-detail-card-types-wrapper">
                        <span class="pokemon-detail-card-type">${types[0]}</span>
                        <span class="pokemon-detail-card-type">${types[1]}</span>
                    </div>
                    <h2 class="pokemon-detail-card-about-headline">About</h2>
                    <div class="pokemon-detail-card-biometrics-wrapper">
                        <div class="pokemon-detail-card-biometric-info">
                            <div class="pokemon-detail-card-biometric-headline">
                                <img src="./assets/icons/weight.svg" alt="" class="pokemon-detail-card-biometric-symbol">
                            </div>
                            <span class="pokemon-detail-card-biometric">Weight</span>
                        </div>
                        <div class="about-section-vertical-line"></div>
                        <div class="pokemon-detail-card-biometric-info">
                            <div class="pokemon-detail-card-biometric-headline">
                                <img src="./assets/icons/straighten.svg" alt="" class="pokemon-detail-card-biometric-symbol straigthen">
                            </div>
                            <span class="pokemon-detail-card-biometric">Height</span>
                        </div>
                        <div class="about-section-vertical-line"></div>
                        <div class="pokemon-detail-card-biometric-info">
                            <div class="pokemon-detail-card-movenames-wrap">
                                <span class="pokemon-detail-card-move">${abilities[0]}</span>
                                <span class="pokemon-detail-card-move">${abilities[1]}</span>
                            </div>
                            <span class="pokemon-detail-card-biometric">Moves</span>
                        </div>
                    </div>
                    <h2 class="pokemon-detail-card-basestats-headline">Base Stats</h2>
                    <div class="pokemon-detail-card-basestats-wrapper">
                        <div class="pokemon-detail-card-basestats-names-wrap">
                            <span class="basestat-name">HP</span>
                            <span class="basestat-name">ATK</span>
                            <span class="basestat-name">DEF</span>
                            <span class="basestat-name">SATK</span>
                            <span class="basestat-name">SDEF</span>
                            <span class="basestat-name">SPD</span>
                        </div>             
                        <div class="pokemon-detail-card-basestats-vertical-line"></div>
                        <div class="pokemon-detail-card-basestats-value-wrap">                            
                            <span class="basestat-value">${stats[0].value}</span>
                            <span class="basestat-value">${stats[1].value}</span>
                            <span class="basestat-value">${stats[2].value}</span>
                            <span class="basestat-value">${stats[3].value}</span>
                            <span class="basestat-value">${stats[4].value}</span>
                            <span class="basestat-value">${stats[5].value}</span>
                        </div>
                        <div class="pokemon-detail-card-basestats-progressbar-wrapper">
                            <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                <div class="progress-bar-background"></div>
                            </div>
                            <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                
                            </div>
                            <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                
                            </div>
                            <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                
                            </div>
                            <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                
                            </div>
                            <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}


