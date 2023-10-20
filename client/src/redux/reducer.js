import * as actions from "./action-types";

const initialState = {
    allPokemonsCache:[],
    allPokemons:[],
    showPokemons:[],
    searchPokemon:[],
    numberPage: 1,
    detailPokemons:[],
    pokemonTypes: [],
    filterOrigin:{
        all:true,
        created: false,
        noCreated: false,
    },
    filterOrder:{
        ascendent: true,
        descendent: false,
    },
}

const rootReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case actions.GET_ALL_POKEMONS:
            return { ...state, allPokemonsCache:payload, allPokemons:payload};
        case actions.GET_PAGE_POKEMONS:
            const pokemonPerPage = 12;
            const startIdx = (payload - 1) * pokemonPerPage;
            const endIdx = startIdx + pokemonPerPage;

            if(state.allPokemons.length <= endIdx){
                return {...state, showPokemons: state.allPokemons.slice(startIdx), numberPage: payload}
            }
            return {...state, showPokemons: state.allPokemons.slice(startIdx, endIdx), numberPage: payload}
        case actions.GET_POKEMON_BY_NAME:
            return {...state, searchPokemon: [payload]}
        case actions.CLEAR_DATA:
            return {...state, searchPokemon: []}
        case actions.GET_DETAIL_POKEMONS:
            return {...state, detailPokemons: payload}
        case actions.GET_POKEMON_TYPES:
            return {...state, pokemonTypes: payload}
        case actions.CREATE_POKEMON:
            return {...state, allPokemonsCache: [...state.allPokemonsCache, payload], allPokemons: [...state.allPokemons, payload]}
        case actions.FILTER_POKEMONS_BY_ORIGIN:
            if(payload.created === true){
                return {...state, allPokemons: state.allPokemonsCache.filter(pokemon => pokemon.created === true), numberPage: 1, filterOrigin : payload}
            } else if(payload.noCreated === true) {
                return {...state, allPokemons: state.allPokemonsCache.filter(pokemon => pokemon.created === false), numberPage: 1, filterOrigin : payload}
            }
            return {...state, allPokemons: state.allPokemonsCache, numberPage: 1, filterOrigin : payload}
        case actions.ORDER_POKEMONS:
            if(payload.ascendent === true){
                return{...state, allPokemons: state.allPokemons.reverse(),numberPage: 1, filterOrder:payload};
            }
            if(payload.descendent === true){
                return{...state, allPokemons: state.allPokemons.reverse(), numberPage: 1, filterOrder:payload};
            }
        default:
            return {...state}
    }
}

export default rootReducer;