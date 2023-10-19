import styles from "./FilterByOrder.module.css";
import { OrderPokemons } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const FilterByOrder = () => {
    const dispatch = useDispatch()
    const filterOrder = useSelector(state => state.filterOrder)

    const handleChange = (event) => {
        const infoCreated = filterOrder;
        const inputCheckbox = event.target

        if(inputCheckbox.name === "created" && inputCheckbox.checked === true){
            infoCreated.created = true;
        }
        if(inputCheckbox.name === "created" && inputCheckbox.checked === false){
            infoCreated.created = false;
        }
        if(inputCheckbox.name === "noCreated" && inputCheckbox.checked === true){
            infoCreated.noCreated = true;
        }
        if(inputCheckbox.name === "noCreated" && inputCheckbox.checked === false){
            infoCreated.noCreated = false;
        }


        dispatch(OrderPokemons(infoCreated));
    }

    return (
    <div>
        <form>
            <h4>Filter By Order:</h4>
            <div className={styles.ascendent_container}>
                <label htmlFor="ascendent">Ascendent</label>
                <input type="checkbox" name="ascendent" id="ascendent" onChange={handleChange}/>
            </div>
            <div className={styles.descendent_container}>
                <label htmlFor="descendent">Descendent</label>
                <input type="checkbox" name="descendent" id="descendent" onChange={handleChange}/>
            </div>
        </form>
    </div>
  )
}

export default FilterByOrder