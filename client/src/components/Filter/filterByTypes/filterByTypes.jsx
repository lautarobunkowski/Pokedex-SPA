import styles from "./FilterByTypes.module.css";
import { useSelector } from "react-redux";

const FilterByTypes = () => {
    const pokemonTypes = useSelector(state => state.pokemonTypes)

  return (
    <div className={styles.types_container}>
        {
        pokemonTypes?pokemonTypes.map(type => {
            return(
                <div className={styles[`${type.type}Type_container`]}>
                    <img src={`./utils/types_icons/${type.type}.svg`} alt={type.type}/>
                </div>
            )
        }):null
        }
    </div>
  )
}

export default FilterByTypes