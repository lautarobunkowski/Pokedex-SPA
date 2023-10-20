import { useDispatch, useSelector } from "react-redux";
import styles from "./Cards.module.css";
import Card from "../card/Card";
import { FcNext, FcPrevious } from 'react-icons/fc';
import { useEffect } from "react";
import {getPagePokemons} from "../../redux/actions";
import Loader from "../loader/Loader";

const Cards = () => {
  const dispatch = useDispatch()
  const allPokemons = useSelector(state => state.allPokemons)
  const showPokemons = useSelector(state => state.showPokemons)
  const numberPage = useSelector(state => state.numberPage)
  const filterOrder = useSelector(state => state.filterOrder)

  useEffect(() => {
    dispatch(getPagePokemons(numberPage))
  },[dispatch, allPokemons, filterOrder])

  return (
    <div className={styles.Cards}>
      <div className={styles.container_cards}>
        {
          showPokemons.length >= 1?showPokemons.map(pokemon => {
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
      
        <div className={styles.numberPage_container}>
          {numberPage !== 1 && <button className={styles.button_page} onClick={() => dispatch(getPagePokemons(numberPage-1))}><FcPrevious/></button>}
          <button className={`${styles.button_page} ${styles.active}`}>{numberPage}</button>
          <button className={styles.button_page} onClick={() => dispatch(getPagePokemons(numberPage + 1))}><FcNext/></button>
        </div>
    </div>
  )
}

export default Cards
