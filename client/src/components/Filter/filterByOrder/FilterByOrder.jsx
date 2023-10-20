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
        <form className={styles.form}>
            <h4>Order</h4>
            <div className={styles.checkboxs_container}>
                <div className={styles.ascendent_container}>
                    <label htmlFor="ascendent">ascendent</label>
                    <input type="checkbox" name="ascendent" checked={filterOrder.ascendent} id="ascendent" onChange={handleChange}/>
                </div>
                <div className={styles.descendent_container}>
                    <label htmlFor="descendent">descendent</label>
                    <input type="checkbox" name="descendent" checked={filterOrder.descendent} id="descendent" onChange={handleChange}/>
                </div>
            </div>
        </form>
  )
}

export default FilterByOrder