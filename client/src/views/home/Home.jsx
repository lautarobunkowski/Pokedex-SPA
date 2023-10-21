import styles from "./Home.module.css";
// -----------components-----------
import Cards from "../../components/cards/Cards";
import FilterByOrigin from "../../components/Filter/filterByOrigin/FilterByOrigin.jsx";
import FilterByOrder from "../../components/Filter/filterByOrder/FilterByOrder.jsx";
import FilterByTypes from "../../components/Filter/filterByTypes/FilterByTypes";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.childrens}>
        <div className={styles.filters_container}>
          <FilterByOrigin/>
          <FilterByOrder/>
          <FilterByTypes/>
        </div>
        <Cards/>
      </div>
    </div>
  )
}

export default Home