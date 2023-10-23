// ---------  HOOKS  ---------
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {clearData, cerrarNavbar} from "../../redux/actions";
// -------------------------------------------------
import styles from "./Search.module.css";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";

const Search = () => {
    const dispatch = useDispatch()
    const searchPokemon = useSelector(state => state.searchPokemon)

    useEffect(() => {
        return () => {
            dispatch(clearData())
        };
    },[])
    return (
        <div className={styles.Cards} onClick={() => dispatch(cerrarNavbar(false))}>
            <div className={styles.container_cards}>
            {
                searchPokemon.length >= 1?searchPokemon.map(pokemon => {
                    return <Card
                    id={pokemon.id} 
                    key={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image} 
                    types={pokemon.types}
                    />
                }):
                <Loader/>
            }
        </div>
    </div>
    )
}

export default Search