import styles from "./FilterByTypes.module.css";
import { useSelector, useDispatch } from "react-redux";
import { FilterPokemonsbyTypes } from "../../../redux/actions";

const FilterByTypes = () => {
    const dispatch = useDispatch();
    const pokemonTypes = useSelector(state => state.pokemonTypes)
    const filterTypes = useSelector(state => state.filterTypes)

    const handleClick = (event) => {
        const input = event.target.name
        const updatedFilterTypes = { ...filterTypes };

        if(updatedFilterTypes.type1 === input){
            updatedFilterTypes.type1 = "";
            return dispatch(FilterPokemonsbyTypes(updatedFilterTypes))
        }
        if(updatedFilterTypes.type2 === input){
            updatedFilterTypes.type2 = "";
            return dispatch(FilterPokemonsbyTypes(updatedFilterTypes))
        }

        if(updatedFilterTypes.type1.length > 0 && updatedFilterTypes.type2.length > 0){
            return
        }

        if(updatedFilterTypes.type1.length === 0){
            updatedFilterTypes.type1 = input
        } else {
            updatedFilterTypes.type2 = input
        }

        return dispatch(FilterPokemonsbyTypes(updatedFilterTypes))
    }

  return (
    <div className={styles.types_container}>
        {
        pokemonTypes?pokemonTypes.map(type => {
            return(
                <div className={styles[`${type.type}Type_container`]}>
                    <input className={filterTypes.type1 === type.type || filterTypes.type2 === type.type?styles.active:null} onClick={handleClick} name={`${type.type}`} type="image" src={`./utils/types_icons/${type.type}.svg`} alt={type.type}/>
                </div>
            )
        }):null
        }
    </div>
  )
}

export default FilterByTypes