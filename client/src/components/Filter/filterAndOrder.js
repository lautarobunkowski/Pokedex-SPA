export const filtersAndOrder = (array, typesState, orderState, originState) => {
    const arrayClone = [...array]

    const filterPokemonByType = (array,typesState) => {
        // if(typesState.all === true){ 
        //     return array;
        // }
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

    const orderPokemons = (array,orderState) => {
        if(orderState.ascendent === true){
            return array;
        }
        if(orderState.descendent === true){
            return array.reverse();
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
    let arrayOrder = orderPokemons(arrayFilterByType,orderState)
    let arrayFilterByOrigin = filterPokemonByOrigin(arrayOrder,originState)
    return arrayFilterByOrigin;
}