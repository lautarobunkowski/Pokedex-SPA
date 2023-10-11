import { useDispatch, useSelector } from "react-redux";
import styles from "./Cards.module.css";
import Card from "../card/Card";
import { FcNext, FcPrevious } from 'react-icons/fc';
import { useEffect } from "react";
import {getPagePokemons} from "../../redux/actions";
import Loader from "../loader/Loader";

const Cards = () => {
  const dispatch = useDispatch()
  const showPokemons = useSelector(state => state.showPokemons)
  const numberPage = useSelector(state => state.numberPage)
  const allPokemons = useSelector(state => state.allPokemons)

  const lastPage = Math.round(allPokemons.length / 12);

  useEffect(() => {
    dispatch(getPagePokemons(numberPage))
  },[])

  return (
    <div className={styles.Cards}>
      <div className={styles.container_cards}>
        {
          showPokemons.length >= 1?showPokemons.map(pokemon => {
            return <Card
            id={pokemon.id} 
            key={pokemon.id}
            name={pokemon.name}
            images={pokemon.images} 
            types={pokemon.types}
            />
          }):
          <Loader/>
        }
      </div>
      
      {/* Paginacion --------------------------------------- */}
      {showPokemons.length !== 1?
        <div className={styles.numberPage_container}>
          {numberPage !== 1 && <button className={styles.button_page} onClick={() => dispatch(getPagePokemons(numberPage-1))}><FcPrevious/></button>}
          <button className={`${styles.button_page} ${styles.active}`}>{numberPage}</button>
          <button className={styles.button_page} onClick={() => dispatch(getPagePokemons(numberPage+1))}>{numberPage+1}</button>
          <button className={styles.button_page} onClick={() => dispatch(getPagePokemons(numberPage+2))}>{numberPage+2}</button>
          <p className={styles.button_page}>...</p>
          <button className={styles.button_page} onClick={() => dispatch(getPagePokemons(lastPage))}>{lastPage}</button>
          <button className={styles.button_page} onClick={() => dispatch(getPagePokemons(numberPage+1))}><FcNext/></button>
        </div>:
        null
      }
    </div>
  )
}

export default Cards
