import styles from "./FilterByOrder.module.css";
import { OrderPokemons } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const FilterByOrder = () => {
    const dispatch = useDispatch()
    const filterOrder = useSelector(state => state.filterOrder)

    const handleChange = (event) => {
        let infoOrder = {};
        const inputCheckbox = event.target

        if(inputCheckbox.name === "ascendent" && inputCheckbox.checked === true){
            infoOrder.ascendent = true;
            infoOrder.descendent = false;
        }
        if(inputCheckbox.name === "ascendent" && inputCheckbox.checked === false){
            infoOrder.ascendent = false;
            infoOrder.descendent = true;
        }
        if(inputCheckbox.name === "descendent" && inputCheckbox.checked === true){
            infoOrder.ascendent = false;
            infoOrder.descendent = true;
        }
        if(inputCheckbox.name === "descendent" && inputCheckbox.checked === false){
            infoOrder.ascendent = true;
            infoOrder.descendent = false;
        }

        dispatch(OrderPokemons(infoOrder));
    }

    return (
    <div>
        <form>
            <h4>Filter By Order:</h4>
            <div className={styles.ascendent_container}>
                <label htmlFor="ascendent">Ascendent</label>
                <input type="checkbox" name="ascendent" checked={filterOrder.ascendent} id="ascendent" onChange={handleChange}/>
            </div>
            <div className={styles.descendent_container}>
                <label htmlFor="descendent">Descendent</label>
                <input type="checkbox" name="descendent" checked={filterOrder.descendent} id="descendent" onChange={handleChange}/>
            </div>
        </form>
    </div>
  )
}

export default FilterByOrder