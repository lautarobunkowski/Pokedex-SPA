import styles from "./FilterByOrder.module.css";
import { OrderPokemons } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const FilterByOrder = () => {
    const dispatch = useDispatch()
    const filterOrder = useSelector(state => state.filterOrder)

    const handleChange = (event) => {
        let infoOrder = {...filterOrder}
        const inputCheckbox = event.target

        if(inputCheckbox.name === "ascendent"){
            infoOrder.highestAttack = false;
            infoOrder.lowesAttack = false;
            if(infoOrder.descendent === true){
                infoOrder.descendent = false;
                infoOrder.ascendent = !infoOrder.ascendent;
            } else {
                infoOrder.ascendent = !infoOrder.ascendent;
            }
        } else if(inputCheckbox.name === "descendent"){
            infoOrder.highestAttack = false;
            infoOrder.lowesAttack = false;
            if(infoOrder.ascendent === true){
                infoOrder.ascendent = false;
                infoOrder.descendent = !infoOrder.descendent;
            } else {
                infoOrder.descendent = !infoOrder.descendent;
            }
        }

        if(inputCheckbox.name === "lowesAttack"){
            infoOrder.ascendent = false;
            infoOrder.descendent = false;
            if(infoOrder.highestAttack === true){
                infoOrder.highestAttack = false;
                infoOrder.lowesAttack = !infoOrder.lowesAttack;
            } else {
                infoOrder.lowesAttack = !infoOrder.lowesAttack;
            }
        } else if(inputCheckbox.name === "highestAttack"){
            infoOrder.ascendent = false;
            infoOrder.descendent = false;
            if(infoOrder.lowesAttack === true){
                infoOrder.lowesAttack = false;
                infoOrder.highestAttack = !infoOrder.highestAttack;
            } else {
                infoOrder.highestAttack = !infoOrder.highestAttack;
            }
        }
        dispatch(OrderPokemons(infoOrder));
    }

    return (
        <form className={styles.form}>
            <h4>Order</h4>
            <div className={styles.inputs_container}>
                <div className={styles.checkboxs_container}>
                    <div className={styles.first_container}>
                        <label htmlFor="ascendent">A → Z</label>
                        <input type="checkbox" name="ascendent" checked={filterOrder.ascendent} id="ascendent" onChange={handleChange}/>
                    </div>
                        <div className={styles.second_container}>
                        <label htmlFor="descendent">Z → A</label>
                    <input type="checkbox" name="descendent" checked={filterOrder.descendent} id="descendent" onChange={handleChange}/>
                </div>
                </div>
                <div className={styles.checkboxs_container}>
                    <div className={styles.first_container}>
                        <label htmlFor="lowesAttack">Attack ▲</label>
                        <input type="checkbox" name="lowesAttack" checked={filterOrder.lowesAttack} id="lowesAttack" onChange={handleChange}/>
                    </div>
                    <div className={styles.second_container}>
                        <label htmlFor="highestAttack">Attack ▼</label>
                        <input type="checkbox" name="highestAttack" checked={filterOrder.highestAttack} id="highestAttack" onChange={handleChange}/>
                    </div>
                </div>
            </div>
        </form>
  )
}

export default FilterByOrder