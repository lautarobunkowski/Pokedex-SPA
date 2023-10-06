import * as actions from "./action-types";

const initialState = {
    allPokemons:[],
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case actions.GET_ALL_POKEMONS:
            return { ...state, allPokemons:action.payload };
        default:
            return {...state}
    }
}

export default rootReducer;