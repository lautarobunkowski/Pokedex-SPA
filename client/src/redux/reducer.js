import * as actions from "./action-types";

const initialState = {
    allPokemons:[],
    showPokemons:[],
    numberPage: 1,
}

const rootReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case actions.GET_ALL_POKEMONS:
            return { ...state, allPokemons:payload, showPokemons: payload.slice(0,12)};
        case actions.GET_PAGE_POKEMONS:
            const pokemonPerPage = 12;

            const startIdx = (payload - 1) * pokemonPerPage;

            const endIdx = startIdx + pokemonPerPage;
            if(state.allPokemons.length <= endIdx){
                return {...state, showPokemons: state.allPokemons.slice(startIdx), numberPage: payload}
            }

            return {...state, showPokemons: state.allPokemons.slice(startIdx, endIdx), numberPage: payload}
        case actions.GET_POKEMON_BY_NAME:
            return {...state, showPokemons: [payload]}
        default:
            return {...state}
    }
}

export default rootReducer;