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
            const startIdx = (payload - 1) * 12;
            let endIdx = startIdx + 12
            if(state.allPokemons.length <= endIdx){
                return {...state, showPokemons: state.allPokemons.slice(startIdx), numberPage: payload}
            }
            return {...state, showPokemons: state.allPokemons.slice(startIdx, endIdx), numberPage: payload}
        default:
            return {...state}
    }
}

export default rootReducer;