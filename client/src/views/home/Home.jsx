import { useSelector } from "react-redux";
import styles from "./Home.module.css";
// -----------components------------
import Cards from "../../components/cards/Cards";
import Loader from "../../components/loader/Loader";


const Home = () => {
  const pokemons = useSelector(state => state.allPokemons)

  return (
    <div className={styles.Home}>
      {pokemons.length === 0? <Loader/>: <Cards/>}
    </div>
  )
}

export default Home