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

