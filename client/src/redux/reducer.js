import * as actions from "./action-types";
import { filtersAndOrder } from "../components/Filter/filterAndOrder.js";

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
    filterTypes:{
        type1:"",
        type2:""
    }
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
            return{...state, allPokemons: filtersAndOrder(state.allPokemonsCache,state.filterTypes,state.filterOrder,payload),numberPage: 1, filterOrigin:payload}
        case actions.FILTER_POKEMON_BY_TYPE:
            return{...state, allPokemons: filtersAndOrder(state.allPokemonsCache,payload,state.filterOrder,state.filterOrigin),numberPage: 1, filterTypes:payload}
        case actions.ORDER_POKEMONS:
            return{...state, allPokemons: filtersAndOrder(state.allPokemonsCache,state.filterTypes,payload,state.filterOrigin),numberPage: 1, filterOrder:payload}
        default:
            return {...state}
    }
}

export default rootReducer;