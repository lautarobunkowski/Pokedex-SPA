import styles from "./Home.module.css";
// -----------components-----------
import Cards from "../../components/cards/Cards";
import FilterByOrigin from "../../components/Filter/filterByOrigin/FilterByOrigin.jsx";
import FilterByOrder from "../../components/Filter/filterByOrder/FilterByOrder.jsx";
import FilterByType from "../../components/Filter/filterByType/FilterByType.jsx";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.childrens}>
        <div className={styles.filters_container}>
          <FilterByOrigin/>
          <FilterByOrder/>
          <FilterByType/>
        </div>
        <Cards/>
      </div>
    </div>
  )
}

export default Home