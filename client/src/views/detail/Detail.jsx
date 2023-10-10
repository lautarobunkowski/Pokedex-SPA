import React from 'react'
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Detail = () => {
  const {idPokemon} = useParams();
  const endpoint = "/pokemons/"
  const {pokemon, setPokemon} = useState()


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
  console.log(pokemon)
  return (
    <div className={styles.Detail}>
      {/* <h1>{pokemon.name}</h1> */}
    </div>
  )
}

export default Detail