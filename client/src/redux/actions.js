import * as actions from "./action-types";
import axios from "axios";

let contador = 0
export const getAllPokemons = (offset, limit) => {
    
    const endpoint = `/pokemons?offset=${offset}&limit=${limit}`
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
            window.alert(error.response.data) 
        }  
    }
}

export const clearData = () => {
    return {
        type: actions.CLEAR_DATA
    }
}

export const getDetailPokemons = (idPokemon) => {

    const endpoint = "/pokemons/"
    return async(dispatch) => {
        try {
            let id = [];
            if(idPokemon === "1"){
                id = [idPokemon, Number(idPokemon)+1]
            } else {
                id = [Number(idPokemon)-1, idPokemon, Number(idPokemon)+1]
            }
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

export const getPokemonTypes = () => {
    const endpoint = "/types"
    return async(dispatch) => {
        const {data} = await axios(endpoint)
        return dispatch({
            type: actions.GET_POKEMON_TYPES,
            payload: data
        })
    }
}

export const createPokemon = (pokemon) => {
    const endpoint = "/pokemons/"
    return async(dispatch) => {
        try {
            const {data} = await axios.post(endpoint,pokemon)
            return dispatch({
                type: actions.CREATE_POKEMON,
                payload: data,
            })
        } catch (error) {
            window.alert(error.response.data)
        }
    }
}

export const filterPokemonsbyOrigins = (info) => {
    return {
        type: actions.FILTER_POKEMONS_BY_ORIGIN,
        payload: info
    }
}

export const OrderPokemons = (info) => {
    return {
        type: actions.ORDER_POKEMONS,
        payload: info,
    }
}

export const FilterPokemonsbyTypes = (info) => {
    return {
        type: actions.FILTER_POKEMON_BY_TYPE,
        payload: info,
    }
}

export const cerrarNavbar = (value) => {
    return {
      type: actions.CERRAR_NAVBAR,
      payload: value
    };
};