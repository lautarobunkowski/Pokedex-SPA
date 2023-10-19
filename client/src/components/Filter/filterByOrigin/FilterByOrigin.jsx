import styles from "./FilterByOrigin.module.css";
import { filterPokemonsbyOrigins } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const FilterByOrigin = () => {
    const dispatch = useDispatch()
    const filterOrigin = useSelector(state => state.filterOrigin)

    const handleChange = (event) => {
        const infoCreated = filterOrigin
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


        dispatch(filterPokemonsbyOrigins(infoCreated));
    }

    return (
    <div>
        <form>
            <h4>Filter By Type:</h4>
            <div className={styles.inputCreated_container}>
                <label htmlFor="created">Created</label>
                <input type="checkbox" name="created" checked={filterOrigin.created} id="created" onChange={handleChange}/>
            </div>
            <div className={styles.inputApi_container}>
                <label htmlFor="noCreated">no Created</label>
                <input type="checkbox" name="noCreated" checked={filterOrigin.noCreated} id="noCreated" onChange={handleChange}/>
            </div>
        </form>
    </div>
  )
}

export default FilterByOrigin