import React from 'react'
import { useEffect } from "react";
import { getAllPokemons} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";
// -----------components------------
import Cards from "../../components/cards/Cards";
import Loader from "../../components/loader/Loader";


const Home = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.allPokemons)

  useEffect(() => {
      dispatch(getAllPokemons());
  },[dispatch])

  return (
    <div className={styles.Home}>
      {pokemons.length === 0? <Loader/>: <Cards/>}
    </div>
  )
}

export default Home