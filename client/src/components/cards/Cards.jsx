import { useEffect } from "react";
import { getAllPokemons } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cards.module.css";
import Card from "../card/Card";

const Cards = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.allPokemons)

  useEffect(() => {
      dispatch(getAllPokemons());
  },[dispatch])

  return (
    <div className={styles.Cards}>
      {
        pokemons.map(pokemon => {
          return <Card/>
        })
      }
    </div>
  )
}

export default Cards
