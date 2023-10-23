import styles from "./Home.module.css";
// -----------components-----------
import Cards from "../../components/cards/Cards";
import FilterByOrigin from "../../components/Filter/filterByOrigin/FilterByOrigin.jsx";
import FilterByOrder from "../../components/Filter/filterByOrder/FilterByOrder.jsx";
import FilterByType from "../../components/Filter/filterByType/FilterByType.jsx";
// ---------  HOOKS  ---------
import { useDispatch } from "react-redux";
import { cerrarNavbar } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.Home} onClick={() => dispatch(cerrarNavbar(false))}>
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