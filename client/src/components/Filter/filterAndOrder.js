export const filtersAndOrder = (array, typesState, orderState, originState) => {
    const arrayClone = [...array]

    const filterPokemonByType = (array,typesState) => {
        if(typesState.type1){ 
            array = array.filter(pokemon => { 
                if(pokemon.types.includes(typesState.type1)){                 
                    return pokemon;
                }
            })
        }
        if(typesState.type2){
            array = array.filter(pokemon => { 
                if(pokemon.types.includes(typesState.type2)){            
                    return pokemon;
                }
            })
        }
        return array;
    }

    const orderPokemonsByName = (array,orderState) => {
        if(orderState.ascendent === false && orderState.descendent === false){
            return array;
        }
        // por orden alfabetico --------------------
        if(orderState.ascendent === true){
            return array.sort((a, b) => {
                        const nameA = a.name.toLowerCase(); // Convierte a minúsculas para que la comparación sea insensible a mayúsculas
                        const nameB = b.name.toLowerCase();

                        if (nameA < nameB) {
                            return -1; // Si a es menor que b, a debe aparecer antes en la lista ordenada
                        }
                        if (nameA > nameB) {
                            return 1; // Si a es mayor que b, a debe aparecer después en la lista ordenada
                        }
                        return 0; // Si los nombres son iguales, no hay cambio en el orden
                    });
        }
        if(orderState.descendent === true){
            return array.sort((a, b) => {
                const nameA = a.name.toLowerCase(); // Convierte a minúsculas para que la comparación sea insensible a mayúsculas
                const nameB = b.name.toLowerCase();

                if (nameA < nameB) {
                    return 1; // Si a es menor que b, a debe aparecer antes en la lista ordenada
                }
                if (nameA > nameB) {
                    return -1; // Si a es mayor que b, a debe aparecer después en la lista ordenada
                }
                return 0; // Si los nombres son iguales, no hay cambio en el orden
            });
        }
    }

    const orderPokemonsByAttack = (array,orderState) => {
        if(orderState.lowesAttack === false && orderState.highestAttack === false){
            return array;
        }
        // por ataque --------------------------------
        if(orderState.lowesAttack === true){
            return array.sort((a, b) => a.attack - b.attack);
        }
        if(orderState.highestAttack === true){
            return array.sort((a, b) => b.attack - a.attack);
        }
    }

    const filterPokemonByOrigin = (array,originState) => {
        if(originState.created === true && originState.noCreated === false){
            return array.filter(pokemon => pokemon.created === true)
        }
        if(originState.noCreated === true && originState.created === false) {
            return array.filter(pokemon => pokemon.created === false)
        }
        if(originState.all === true && originState.noCreated === false && originState.created === false) {
            return array;
        }
    }

    let arrayFilterByType = filterPokemonByType(arrayClone, typesState)
    let arrayOrderByName = orderPokemonsByName(arrayFilterByType,orderState)
    let arrayOrderByAttack = orderPokemonsByAttack(arrayOrderByName,orderState)
    let arrayFilterByOrigin = filterPokemonByOrigin(arrayOrderByAttack,originState)
    return arrayFilterByOrigin;
}