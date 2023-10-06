import React from 'react'
import { useEffect } from "react";
import { getAllPokemons } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";


const Home = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.allPokemons)

  useEffect(() => {
      dispatch(getAllPokemons());
  },[])

  return (
    <div className={styles.Home}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab ducimus voluptatem ratione vero officiis sapiente non similique suscipit, amet vel?</p>
    </div>
  )
}

export default Home