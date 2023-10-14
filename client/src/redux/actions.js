import * as actions from "./action-types";
import axios from "axios";

export const getAllPokemons = () => {
    const endpoint = "/pokemons"
    return async(dispatch) =>{
        try {
            const{data} = await axios.get(endpoint)
            return dispatch({
                type: actions.GET_ALL_POKEMONS, 
                payload: data,
            })
        } catch (error) {
            window.alert(error.message)
        }
    }
};

export const getPagePokemons = (numberPage) => {
    return {
        type: actions.GET_PAGE_POKEMONS,
        payload: numberPage 
    }
};

export const getPokemonByName = (pkName) => {
    const endpoint = `/pokemons/name?name=`
    return async(dispatch) => {
        try {
            const {data} = await axios(`${endpoint}${pkName}`)
            return dispatch({
                type: actions.GET_POKEMON_BY_NAME,
                payload: data,
            })
        } catch (error) {
            window.alert(error.message) 
        }  
    }
}

export const getDetailPokemons = (idPokemon) => {
    const endpoint = "/pokemons/"
    return async(dispatch) => {
        try {
            const id = [Number(idPokemon)-1, idPokemon, Number(idPokemon)+1]
            const responses = await axios.all(id.map(pokemon => axios(`${endpoint}${pokemon}`)))
            const pokemons = responses.map(response => response.data)
            return dispatch({
                    type: actions.GET_DETAIL_POKEMONS,
                    payload: pokemons
            }
        )
        } catch (error) {
            window.alert(error.message)
        }
    }
}