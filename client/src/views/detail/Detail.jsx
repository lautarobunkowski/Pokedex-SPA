import React from 'react'
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";

const Detail = () => {
  const {idPokemon} = useParams();
  const endpoint = "/pokemons/"
  const [pokemon, setPokemon] = useState({})



  useEffect(() => {
    const getPokemonById = async() => {
      try {
        const {data} = await axios(`${endpoint}${idPokemon}`)
        return setPokemon(data)
      } catch (error) {
        window.alert(error.message)
      }
    }
    getPokemonById()
  },[idPokemon, setPokemon])
  
  return (
    !pokemon.images? 
    <Loader/>:
    <div className={styles.Detail}>
      <div className={styles.background_detail} style={{
      background: "#82B4B9"
      }}>
        <p>{pokemon.name.toUpperCase()}</p>
      </div>
      <div className={styles.container_info}>
        <h1>{pokemon.name}</h1>
      </div>
      <div className={styles.container_img}>
        <p>{pokemon.weight}</p>
        <p>{pokemon.height}</p>
        <img src={pokemon.images.front_default} alt={pokemon.name} />
      </div>
      <div className={styles.container_slice}>
        Slice
      </div>
    </div>
  )
}

export default Detail