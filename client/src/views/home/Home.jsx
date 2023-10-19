import { useSelector } from "react-redux";
import styles from "./Home.module.css";
// -----------components------------
import Cards from "../../components/cards/Cards";
import Loader from "../../components/loader/Loader";
import FilterByOrigin from "../../components/Filter/filterByOrigin/FilterByOrigin.jsx";
import FilterByOrder from "../../components/Filter/filterByOrder/FilterByOrder.jsx";

const Home = () => {
  const pokemons = useSelector(state => state.allPokemons)

  return (
    <div className={styles.Home}>
      {pokemons.length === 0?
      <Loader/>:
      <div className={styles.childrens}>
        <div className={styles.filters_container}>
          <FilterByOrigin/>
          <FilterByOrder/>
        </div>
        <Cards/>
      </div>
      }
    </div>
  )
}

export default Home