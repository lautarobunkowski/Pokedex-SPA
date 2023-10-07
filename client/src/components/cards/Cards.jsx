import { useEffect } from "react";
import { getAllPokemons } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cards.module.css";
import Card from "../card/Card";

const Cards = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.allPokemons)
  const pokemonsPage = pokemons.slice(0,12)

  useEffect(() => {
      dispatch(getAllPokemons());
  },[dispatch])
  console.log(pokemonsPage[0])

  return (
    <div className={styles.Cards}>
      {
        pokemonsPage.map(pokemon => {
          return <Card 
          name={pokemon.name}
          images={pokemon.images} 
          types={pokemon.types}
          />
        })
      }
    </div>
  )
}

export default Cards
