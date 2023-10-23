// hooks -----------------------
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// estilos -------------------------
import styles from "./Detail.module.css";
// components ------------------------
import Loader from "../../components/loader/Loader";
import Card from "../../components/card/Card";
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import medidor_1 from "./medidor_1.png";
// utils --------------------------------
import getColorDetailByType from "./getColorDetailByType";
import { getDetailPokemons, cerrarNavbar } from "../../redux/actions";

const Detail = () => {
  const dispatch = useDispatch();
  let {idPokemon} = useParams();

  const endpoint = "/pokemons/";

  const detailPokemons = useSelector(state => state.detailPokemons)
  const [pokemon, setPokemon] = useState({}); 

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
    dispatch(getDetailPokemons(idPokemon))
  },[idPokemon, setPokemon, dispatch])
  
  return (
    !pokemon.image? 
    <div className={styles.loader}>
      <Loader/>
    </div>:
    <div className={styles.Detail} onClick={() => dispatch(cerrarNavbar(false))}>
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
        <div className={styles.medidor_container}>
          <img className={styles.medidor_1} src={medidor_1} alt="medidor_1" />
          <p className={styles.weight}>Weight - {pokemon.weight / 10} Kg</p>
          <p className={styles.height}>Height - {pokemon.height * 10} Cm</p>
        </div>
        <img className={styles.img} src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className={styles.container_slice}>
        <div className={styles.detail_cards}>
          {
            detailPokemons.length !== 3?<Loader/>:detailPokemons.map(pokemon => {
              return <Card
              id={pokemon.id} 
              name={pokemon.name}
              image={pokemon.image} 
              types={pokemon.types}
              />
            })
          }
        </div>
        <div className={styles.slice_buttons}>
          <Link to={`/detail/${Number(idPokemon)-1}`}>
            <BiUpArrow/>
          </Link>
          <Link to={`/detail/${Number(idPokemon)+1}`}>
            <BiDownArrow/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Detail