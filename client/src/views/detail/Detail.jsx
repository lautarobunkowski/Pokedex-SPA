import React from 'react'
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import getColorDetailByType from "./getColorDetailByType";
import medidor_1 from "./medidor_1.png";

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
    <div className={styles.loader}>
      <Loader/>
    </div>:
    <div className={styles.Detail}>
      <div className={styles.background_detail} style={{
      background:`${getColorDetailByType(pokemon.types[0])}`
      }}>
        <p>{pokemon.name.toUpperCase()}</p>
      </div>
      <div className={styles.container_info}>
        <h1 className={styles.info_name}>{pokemon.name.toUpperCase()}</h1>
        <div className={styles.stats_container}>
        {
          pokemon.stats.map(stat => {
            return(
              <div className={styles[`${stat.name}_container`]}>
                <p>{stat.name}</p>
                <p>{stat.base_state}</p>
              </div>
            )
          })
        }
        </div>
      </div>
      <div className={styles.container_img}>
        <img className={styles.medidor_1} src={medidor_1} alt="medidor_1" />
        <p className={styles.weight}>Weight - {pokemon.weight / 10} Kg</p>
        <p className={styles.height}>Height - {pokemon.height * 10} Cm</p>
        <img className={styles.img} src={pokemon.images.front_default} alt={pokemon.name} />
      </div>
      <div className={styles.container_slice}>
        Slice
      </div>
    </div>
  )
}

export default Detail