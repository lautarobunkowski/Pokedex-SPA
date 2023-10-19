import {useState} from 'react'
import styles from "./FilterByOrder.module.css";
import { filterPokemonsbyOrigins } from "../../../redux/actions";
import { useDispatch} from "react-redux";

const FilterByOrder = () => {
    const dispatch = useDispatch()

    const [checked, setChecked] = useState({
        ascendent: false,
        descendent:false
    })

    const handleChange = (event) => {
        const inputName = event.target.name;

    // Crear una copia del estado actual para evitar mutar el estado directamente
    const updatedChecked = { ...checked };

        if (inputName === 'ascendent') {
            updatedChecked.ascendent = !checked.ascendent;
        } else if (inputName === 'descendent') {
            updatedChecked.descendent = !checked.descendent;
        }

    // Actualizar el estado con el nuevo valor
        setChecked(updatedChecked);

    // Luego, puedes enviar el estado actualizado al dispatch
        dispatch(filterPokemonsbyOrigins(updatedChecked));
    }

    return (
    <div>
        <form>
            <h4>Filter By Order:</h4>
            <div className={styles.inputAsc_container}>
                <label htmlFor="ascendent">Ascendent</label>
                <input type="checkbox" name="ascendent" id="ascendent" checked={checked.created} onChange={handleChange}/>
            </div>
            <div className={styles.inputDes_container}>
                <label htmlFor="descendent">Descendent</label>
                <input type="checkbox" name="descendent" id="descendent" checked={checked.noCreated} onChange={handleChange}/>
            </div>
        </form>
    </div>
  )
}

export default FilterByOrder