import {useState} from 'react'
import styles from "./FilterByOrigin.module.css";
import { filterPokemonsbyOrigins } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const FilterByOrigin = () => {
    const dispatch = useDispatch()
    const filterOrigin = useSelector(state => state.filterOrigin)

    const [checked, setChecked] = useState({
        created: false,
    })

    const handleChange = (event) => {
        const inputCheckbox = event.target.name
        if(inputCheckbox === "created"){
            return setChecked({created: !checked.created})
        }
        if(inputCheckbox === "noCreated"){
            return setChecked({created: !checked.created})
        }


        dispatch(filterPokemonsbyOrigins(checked));
    }

    return (
    <div>
        <form>
            <h4>Filter By Type:</h4>
            <div className={styles.inputCreated_container}>
                <label htmlFor="created">Created</label>
                <input type="checkbox" name="created" id="created" onChange={handleChange}/>
            </div>
            <div className={styles.inputApi_container}>
                <label htmlFor="noCreated">no Created</label>
                <input type="checkbox" name="noCreated" id="noCreated" onChange={handleChange}/>
            </div>
        </form>
    </div>
  )
}

export default FilterByOrigin