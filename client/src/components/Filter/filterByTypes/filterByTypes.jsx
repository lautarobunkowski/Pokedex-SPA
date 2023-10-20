import styles from "./FilterByTypes.module.css";
import { useSelector, useDispatch } from "react-redux";
import { FilterPokemonsbyTypes } from "../../../redux/actions";

const FilterByTypes = () => {
    const dispatch = useDispatch();
    const pokemonTypes = useSelector(state => state.pokemonTypes)
    const filterTypes = useSelector(state => state.filterTypes)

    const handleChange = (event) => {
        const input = event.target.name
        if(filterTypes.type1 === input){
            filterTypes.type1 = "";
        }
        if(filterTypes.type2 === input){
            filterTypes.type2 = "";
        }

        if(filterTypes.type1.length > 0 && filterTypes.type2.length > 0){
            return
        }


        if(filterTypes.type1.length === 0){
            filterTypes.type1 = input
        } else {
            filterTypes.type2 = input
        }
        dispatch(FilterPokemonsbyTypes(filterTypes))
    }

  return (
    <div className={styles.types_container}>
        {
        pokemonTypes?pokemonTypes.map(type => {
            return(
                <div className={styles[`${type.type}Type_container`]}>
                    <input onChange={handleChange} name={`${type.type}`} type="image" src={`./utils/types_icons/${type.type}.svg`} alt={type.type}/>
                </div>
            )
        }):null
        }
    </div>
  )
}

export default FilterByTypes