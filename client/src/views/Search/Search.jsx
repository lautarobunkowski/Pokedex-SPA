import { useSelector, useDispatch } from "react-redux";
import styles from "./Search.module.css";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import { useEffect } from "react";
import {clearData} from "../../redux/actions";

const Search = () => {
    const dispatch = useDispatch()
    const searchPokemon = useSelector(state => state.searchPokemon)

    useEffect(() => {
        return () => {
            dispatch(clearData())
        };
    },[])
    return (
        <div className={styles.Cards}>
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