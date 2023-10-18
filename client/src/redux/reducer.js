import * as actions from "./action-types";

const initialState = {
    allPokemons:[],
    pokemons:[],
    showPokemons:[],
    searchPokemon:[],
    numberPage: 1,
    detailPokemons:[],
    pokemonTypes: []
}

const rootReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case actions.GET_ALL_POKEMONS:
            return { ...state, allPokemons:payload, pokemons: payload};
        case actions.GET_PAGE_POKEMONS:
            const pokemonPerPage = 12;
            const startIdx = (payload - 1) * pokemonPerPage;

            const endIdx = startIdx + pokemonPerPage;
            if(state.allPokemons.length <= endIdx){
                return {...state, showPokemons: state.pokemons.slice(startIdx), numberPage: payload}
            }

            return {...state, showPokemons: state.pokemons.slice(startIdx, endIdx), numberPage: payload}
        case actions.GET_POKEMON_BY_NAME:
            return {...state, searchPokemon: [payload]}
        case actions.CLEAR_DATA:
            return {...state, searchPokemon: []}
        case actions.GET_DETAIL_POKEMONS:
            return {...state, detailPokemons: payload}
        case actions.GET_POKEMON_TYPES:
            return {...state, pokemonTypes: payload}
        case actions.CREATE_POKEMON:
            return {...state, allPokemons: [...state.pokemons, payload], pokemons: [...state.pokemons, payload]}
        case actions.FILTER_POKEMONS:
            //payload = {created: true, types:["fire", "steel"]}
            return {...state}
        default:
            return {...state}
    }
}

export default rootReducer;