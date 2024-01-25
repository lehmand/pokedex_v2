function pokemonListTemplate(currentPokemon, i) {
    let typeArr = currentPokemon.types;
    let name = currentPokemon.name;
    let image = currentPokemon.image;
    let id = currentPokemon.id;
    
        return /*html*/`
            <div class="pokemon-card" id="pokemonID${i}" onclick="showDetailCard(${id}, ${i})">
                <div class="pokemon-card-header">
                    <h1 class="pokemon-name">${name}</h1>
                    <span class="pokemon-id">#${id}</span>
                </div>
                <div class="pokemon-image-wrapper">
                    <img src="${image}" class="pokemon-image" alt="pokemon-image">
                </div>
            </div>
        `
}

function detailCardHTML(index){
    let name = pokemonData[index].name;
    let id = pokemonData[index].id;
    let image = pokemonData[index].image;
    let types = pokemonData[index].types;
    let abilities = pokemonData[index].abilities;
    let stats = pokemonData[index].stats;
    let weight = pokemonData[index].weight;
    let height = pokemonData[index].height;

    if(pokemonHasTwoTypes(types)){
        return /*html*/`
        <div class="pokemon-detail-card-wrapper">
            <div class="pokemon-detail-card" id="pokemon-detail-card-id${index}">
                <div class="pokemon-detail-card-header">
                    <img src="./assets/icons/arrow_back.svg" onclick="closeDetails()" class="pokemon-detail-card-closebutton">
                    <h1 class="pokemon-detail-card-name">${name}</h1>
                    <span class="pokemon-detail-card-id">#${id}</span>
                </div>
                <img src="./assets/icons/pokeball.svg" alt="" class="pokemon-detail-card-pokeball">
                <div class="pokemon-detail-card-image-wrapper">
                    <img src="${image}" class="pokemon-detail-card-image">
                </div>
                <div class="pokemon-detail-card-info-wrapper">
                    <div class="pokemon-detail-card-types-wrapper">
                        <span class="pokemon-detail-card-type" id="pokemon-type0${id}">${types[0]}</span>
                        <span class="pokemon-detail-card-type" id="pokemon-type${id}${id}">${types[1]}</span>
                    </div>
                    <h2 class="pokemon-detail-card-about-headline" id="pokemon-detail-about-headline-id${id}">About</h2>
                    <div class="pokemon-detail-card-biometrics-wrapper">
                        <div class="pokemon-detail-card-biometric-info biometric-weight">
                            <div class="pokemon-detail-card-biometric-headline">
                                <img src="./assets/icons/weight.svg" alt="" class="pokemon-detail-card-biometric-symbol">
                                <span class="pokemon-weight pokemon-bio">${weight}</span>
                                </div>
                            <span class="pokemon-detail-card-biometric">Weight</span>
                        </div>
                        <div class="pokemon-detail-card-biometric-info biometric-border">
                            <div class="pokemon-detail-card-biometric-headline">
                                <img src="./assets/icons/straighten.svg" alt="" class="pokemon-detail-card-biometric-symbol straigthen">
                                <span class="pokemon-height pokemon-bio">${height}</span>
                            </div>
                            <span class="pokemon-detail-card-biometric">Height</span>
                        </div>
                        <div class="pokemon-detail-card-biometric-info">
                            <div class="pokemon-detail-card-movenames-wrap">
                                <span class="pokemon-detail-card-move">${abilities[0]}</span>
                                <span class="pokemon-detail-card-move">${abilities[1]}</span>
                            </div>
                            <span class="pokemon-detail-card-biometric">Moves</span>
                        </div>
                    </div>
                    <h2 class="pokemon-detail-card-basestats-headline" id="pokemon-detail-basestats-headline-id${id}">Base Stats</h2>
                    <div class="pokemon-detail-card-basestats-wrapper">
                        <div class="pokemon-detail-card-basestats-names-wrap">
                            <span class="basestat-name basestat-name${id}">HP</span>
                            <span class="basestat-name basestat-name${id}">ATK</span>
                            <span class="basestat-name basestat-name${id}">DEF</span>
                            <span class="basestat-name basestat-name${id}">SATK</span>
                            <span class="basestat-name basestat-name${id}">SDEF</span>
                            <span class="basestat-name basestat-name${id}">SPD</span>
                        </div>             
                        <div class="pokemon-detail-card-basestats-vertical-line"></div>
                        <div class="pokemon-detail-card-basestats-value-wrapper">
                            <div class="pokemon-detail-card-basestats-value-wrap">
                                <span class="basestat-value">${stats[0].value}</span>
                                <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                    <div class="progress-bar-background">
                                    <div class="progress-bar-value bar-value${id}" style="width:${stats[0].value}%; max-width:100%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="pokemon-detail-card-basestats-value-wrap">
                                <span class="basestat-value">${stats[1].value}</span>
                                <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                    <div class="progress-bar-background">
                                    <div class="progress-bar-value bar-value${id}" style="width:${stats[1].value}%; max-width:100%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="pokemon-detail-card-basestats-value-wrap">
                                <span class="basestat-value">${stats[2].value}</span>
                                <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                    <div class="progress-bar-background">
                                    <div class="progress-bar-value bar-value${id}" style="width:${stats[2].value}%; max-width:100%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="pokemon-detail-card-basestats-value-wrap">
                                <span class="basestat-value">${stats[3].value}</span>
                                <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                    <div class="progress-bar-background">
                                    <div class="progress-bar-value bar-value${id}" style="width:${stats[3].value}%; max-width:100%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="pokemon-detail-card-basestats-value-wrap">
                                <span class="basestat-value">${stats[4].value}</span>
                                <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                    <div class="progress-bar-background">
                                    <div class="progress-bar-value bar-value${id}" style="width:${stats[4].value}%; max-width:100%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="pokemon-detail-card-basestats-value-wrap">
                                <span class="basestat-value">${stats[5].value}</span>
                                <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                    <div class="progress-bar-background">
                                        <div class="progress-bar-value bar-value${id}" style="width:${stats[5].value}%; max-width:100%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    `
    } else {
        return /*html*/`
        <div class="pokemon-detail-card-wrapper">
            <div class="pokemon-detail-card" id="pokemon-detail-card-id${index}">
                <div class="pokemon-detail-card-header">
                    <img src="./assets/icons/arrow_back.svg" onclick="closeDetails()" class="pokemon-detail-card-closebutton">
                    <h1 class="pokemon-detail-card-name">${name}</h1>
                    <span class="pokemon-detail-card-id">#${id}</span>
                </div>
                <img src="./assets/icons/pokeball.svg" alt="" class="pokemon-detail-card-pokeball">
                <div class="pokemon-detail-card-image-wrapper">
                    <img src="${image}" class="pokemon-detail-card-image">
                </div>
                <div class="pokemon-detail-card-info-wrapper">
                    <div class="pokemon-detail-card-types-wrapper">
                        <span class="pokemon-detail-card-type" id="pokemon-type0${id}">${types[0]}</span>
                    </div>
                    <h2 class="pokemon-detail-card-about-headline" id="pokemon-detail-about-headline-id${id}">About</h2>
                    <div class="pokemon-detail-card-biometrics-wrapper">
                        <div class="pokemon-detail-card-biometric-info">
                            <div class="pokemon-detail-card-biometric-headline">
                                <img src="./assets/icons/weight.svg" alt="" class="pokemon-detail-card-biometric-symbol">
                                <span class="pokemon-weight pokemon-bio">${weight}</span>
                                </div>
                            <span class="pokemon-detail-card-biometric">Weight</span>
                        </div>
                        <div class="pokemon-detail-card-biometric-info biometric-border">
                            <div class="pokemon-detail-card-biometric-headline">
                                <img src="./assets/icons/straighten.svg" alt="" class="pokemon-detail-card-biometric-symbol straigthen">
                                <span class="pokemon-height pokemon-bio">${height}</span>
                            </div>
                            <span class="pokemon-detail-card-biometric">Height</span>
                        </div>
                        <div class="pokemon-detail-card-biometric-info">
                            <div class="pokemon-detail-card-movenames-wrap">
                                <span class="pokemon-detail-card-move">${abilities[0]}</span>
                                <span class="pokemon-detail-card-move">${abilities[1]}</span>
                            </div>
                            <span class="pokemon-detail-card-biometric">Moves</span>
                        </div>
                    </div>
                    <h2 class="pokemon-detail-card-basestats-headline" id="pokemon-detail-basestats-headline-id${id}">Base Stats</h2>
                    <div class="pokemon-detail-card-basestats-wrapper">
                        <div class="pokemon-detail-card-basestats-names-wrap">
                            <span class="basestat-name basestat-name${id}">HP</span>
                            <span class="basestat-name basestat-name${id}">ATK</span>
                            <span class="basestat-name basestat-name${id}">DEF</span>
                            <span class="basestat-name basestat-name${id}">SATK</span>
                            <span class="basestat-name basestat-name${id}">SDEF</span>
                            <span class="basestat-name basestat-name${id}">SPD</span>
                        </div>             
                        <div class="pokemon-detail-card-basestats-vertical-line"></div>
                        <div class="pokemon-detail-card-basestats-value-wrapper">
                            <div class="pokemon-detail-card-basestats-value-wrap">
                                <span class="basestat-value">${stats[0].value}</span>
                                <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                    <div class="progress-bar-background">
                                    <div class="progress-bar-value bar-value${id}" style="width:${stats[0].value}%; max-width:100%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="pokemon-detail-card-basestats-value-wrap">
                                <span class="basestat-value">${stats[1].value}</span>
                                <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                    <div class="progress-bar-background">
                                    <div class="progress-bar-value bar-value${id}" style="width:${stats[1].value}%; max-width:100%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="pokemon-detail-card-basestats-value-wrap">
                                <span class="basestat-value">${stats[2].value}</span>
                                <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                    <div class="progress-bar-background">
                                    <div class="progress-bar-value bar-value${id}" style="width:${stats[2].value}%; max-width:100%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="pokemon-detail-card-basestats-value-wrap">
                                <span class="basestat-value">${stats[3].value}</span>
                                <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                    <div class="progress-bar-background">
                                    <div class="progress-bar-value bar-value${id}" style="width:${stats[3].value}%; max-width:100%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="pokemon-detail-card-basestats-value-wrap">
                                <span class="basestat-value">${stats[4].value}</span>
                                <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                    <div class="progress-bar-background">
                                    <div class="progress-bar-value bar-value${id}" style="width:${stats[4].value}%; max-width:100%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="pokemon-detail-card-basestats-value-wrap">
                                <span class="basestat-value">${stats[5].value}</span>
                                <div class="pokemon-detail-card-basestats-progressbar-wrap">
                                    <div class="progress-bar-background">
                                        <div class="progress-bar-value bar-value${id}" style="width:${stats[5].value}%; max-width:100%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    `
    }
    
}


