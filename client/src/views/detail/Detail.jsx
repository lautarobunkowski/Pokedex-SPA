// hooks -----------------------
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import axios from "axios";
// estilos -------------------------
import styles from "./Detail.module.css";
// components ------------------------
import Loader from "../../components/loader/Loader";
import medidor_1 from "./medidor_1.png";
import ProgressBarsDetail from "./ProgressBarsDetail.jsx";
// utils --------------------------------
import getColorDetailByType from "./getColorDetailByType";
import { cerrarNavbar } from "../../redux/actions";

const Detail = () => {
  const dispatch = useDispatch();
  let {idPokemon} = useParams();

  const endpoint = "/pokemons/";

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
          <ProgressBarsDetail health={pokemon.health} attack={pokemon.attack} defense={pokemon.defense} speed={pokemon.speed}/>
        </div>
        {
          pokemon.types.length > 1?
          <div className={styles.types_pokemon}>
            <div className={styles.types_pokemon1}>
              <img src={`/utils/types_icons/${pokemon.types[0]}.svg`} alt="" />
            </div>
            <div className={styles.types_pokemon2}>
            <img src={`/utils/types_icons/${pokemon.types[1]}.svg`} alt="" />
            </div>
          </div>:
          <div className={styles.types_pokemon}>
            <div className={styles.types_pokemon1}>
              <img src={`/utils/types_icons/${pokemon.types[0]}.svg`} alt="" />
            </div>
          </div>
        }
      </div>
      <div className={styles.container_img}>
        <div className={styles.medidor_container}>
          <img className={styles.medidor_1} src={medidor_1} alt="medidor_1" />
          {pokemon.weight?<p className={styles.weight}>Weight - {pokemon.weight / 10} Kg</p>:<p className={styles.weight}>unknown</p>}
          {pokemon.height?<p className={styles.height}>Height - {pokemon.height * 10} Cm</p>:<p className={styles.height}>unknown</p>}
        </div>
        <img className={styles.img} src={pokemon.image} alt={pokemon.name} />
      </div>
    </div>
  )
}

export default Detail