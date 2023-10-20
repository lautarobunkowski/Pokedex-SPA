const mock = [
    {
    "created": false,
    "id": 1,
    "name": "bulbasaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "types": [
    "grass",
    "poison"
    ]
    },
    {
    "created": false,
    "id": 2,
    "name": "ivysaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    "types": [
    "grass",
    "poison"
    ]
    },
    {
    "created": false,
    "id": 3,
    "name": "venusaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    "types": [
    "grass",
    "poison"
    ]
    },
    {
    "created": false,
    "id": 4,
    "name": "charmander",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    "types": [
    "fire"
    ]
    },
    {
    "created": false,
    "id": 5,
    "name": "charmeleon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    "types": [
    "fire"
    ]
    },
    {
    "created": false,
    "id": 6,
    "name": "charizard",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    "types": [
    "fire",
    "flying"
    ]
    },
    {
    "created": false,
    "id": 7,
    "name": "squirtle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    "types": [
    "water"
    ]
    },
    {
    "created": false,
    "id": 8,
    "name": "wartortle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    "types": [
    "water"
    ]
    },
    {
    "created": false,
    "id": 9,
    "name": "blastoise",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    "types": [
    "water"
    ]
    },
    {
    "created": false,
    "id": 10,
    "name": "caterpie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    "types": [
    "bug"
    ]
    },
    {
    "id": "8b32a2bf-150d-40c3-a744-83fc4e88cc10",
    "name": "RicardoMilos",
    "image": "https://media.tenor.com/aKT1-5rcctgAAAAi/ricardo-milos-dance.gif",
    "health": 200,
    "attack": 200,
    "defense": 200,
    "speed": null,
    "height": null,
    "weight": null,
    "created": true,
    "types": [
    "fighting",
    "rock"
    ]
    },
    {
    "id": "06153dd8-e90e-4a36-908b-75f993da77b7",
    "name": "RicardoMilosq",
    "image": "https://media.tenor.com/aKT1-5rcctgAAAAi/ricardo-milos-dance.gif",
    "health": 1,
    "attack": 1,
    "defense": 1,
    "speed": null,
    "height": null,
    "weight": null,
    "created": true,
    "types": [
    "fighting"
    ]
    },
    {
    "id": "8a056b19-098e-43c9-8b5f-660f840b131f",
    "name": "RicardoMilosc",
    "image": "https://media.tenor.com/aKT1-5rcctgAAAAi/ricardo-milos-dance.gif",
    "health": 1,
    "attack": 1,
    "defense": 1,
    "speed": null,
    "height": null,
    "weight": null,
    "created": true,
    "types": [
    "ground",
    "rock"
    ]
    }
    ]

const types = {
    all:false,
    type1:"fire",
    type2:""
}
const order = {
    ascendent: true,
    descendent: false,
}
const origin = {
    all:false,
    created: false,
    noCreated: false,
}

const filtersAndOrder = (array, typesState, orderState, originState) => {
    let cloneArray = [...array]
    const filterPokemonByType = (array,typesState) => {
        if(typesState.all === true){ //si quiero mostrar todos simplemente devuelvo el mismo array
            return array;
        }
        if(typesState.type1){ //si hay el 1 tipo
            array = array.filter(pokemon => { // todos los que matcheen con el primer 
                if(pokemon.types.includes(typesState.type1)){                   // tipo seleccionado en el input
                    return pokemon;
                }
            })
        }
        if(typesState.type2){ //si hay el 2 tipo
            array = array.filter(pokemon => { // todos los que tienen el segundo tipo
                if(pokemon.types.includes(typesState.type2)){                   // tipo seleccionado en el input
                    return pokemon;
                }
            })
        }
        return array;
    }

    const orderPokemons = (array,orderState) => {
        if(orderState.ascendent === true){
            return array.reverse();
        }
        if(orderState.descendent === true){
            return array.reverse();
        }
    }

    const filterPokemonByOrigin = (originState) => {
        if(originState.created === true){
            return array.filter(pokemon => pokemon.created === true)
        } else if(originState.noCreated === true) {
            return array.filter(pokemon => pokemon.created === false)
        }
        return array;
    }

    let arrayFilterByType = filterPokemonByType(cloneArray, typesState)
    let arrayOrder = orderPokemons(arrayFilterByType,orderState)
    let arrayFilterByOrigin = filterPokemonByOrigin(arrayOrder,originState)
    return arrayFilterByOrigin;
}


console.log(filtersAndOrder(mock, types, order, origin))
