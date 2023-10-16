import styles from "./Form.module.css";
import { useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import { createPokemon } from "../../redux/actions";
import validation from "./validation";
import validationSubmit from "./validationSubmit";
import Button from "../../components/button/Button";

const Form = () => {
    const dispatch = useDispatch();
    const pokemonTypes = useSelector(state => state.pokemonTypes)
    const [pokemon, setPokemon] = useState({
    types: []
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const property = event.target.name;
        let value = event.target.value;
        if(property === "health" || property === "attack" || property === "defense" || property === "speed" || property === "height" || property === "weight"){
            value = Number(value)
        }

        setPokemon({...pokemon, [property]:value})
        setErrors(validation({...pokemon, [property]:value})) //validacion de campos
        }

    const handleClick = (event) => {
        const typeInput = event.target.name;

        if(pokemon.types.length === 2 && event.target.checked === true){
            event.target.checked = false;
            return window.alert("No puedes tener mas de 2 tipos por Pokemon")
        }

        if(event.target.checked === false){
            setPokemon({...pokemon, types: pokemon.types.filter(type => type !== typeInput)})
        } else {
            setPokemon({...pokemon, types:[...pokemon.types, typeInput]})
        }
    }

    const handleSubmit = (e) => {
        if(validationSubmit(pokemon)){
            e.preventDefault();
            dispatch(createPokemon(pokemon))
        } else {
            window.alert("No se han requerido los datos obligatorios")
            e.preventDefault();
        }
    }

    return (<div className={styles.form_container}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Create your Pokemon!</h2>
            <div className={styles.name_container}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={handleChange}/>
            </div>
            <div className={styles.image_container}>
                <label htmlFor="image">image</label>
                <input type="text" name="image" id="image" onChange={handleChange}/>
            </div>
            <div className={styles.health_container}>
                <label htmlFor="health">health</label>
                <input type="number" name="health" id="health" onChange={handleChange}/>
            </div>
            <div className={styles.attack_container}>
                <label htmlFor="attack">attack</label>
                <input type="number" name="attack" id="attack" onChange={handleChange}/>
            </div>
            <div className={styles.defense_container}>
                <label htmlFor="defense">defense</label>
                <input type="number" name="defense" id="defense" onChange={handleChange}/>
            </div>
            <div className={styles.speed_container}>
                <label htmlFor="speed">speed</label>
                <input type="number" name="speed" id="speed" onChange={handleChange}/>
            </div>
            <div className={styles.height_container}>
                <label htmlFor="height">height</label>
                <input type="number" name="height" id="height" onChange={handleChange}/>
            </div>
            <div className={styles.weight_container}>
                <label htmlFor="weight">weight</label>
                <input type="number" name="weight" id="weight" onChange={handleChange}/>
            </div>
            <div className={styles.types_container}>
                {
                pokemonTypes?pokemonTypes.map(type => {
                    return(
                        <div className={styles[`${type.type}Type_container`]}>
                            <img src={`./utils/types_icons/${type.type}.png`} alt={type.type}/>
                            <label htmlFor={type.type}>
                                <p>{type.type}</p>
                            </label>
                            <input type="checkbox" name={type.type} id={type.type} onClick={handleClick}/>
                        </div>
                    )
                }):null
                }
            </div>
            <Button type="submit" text="Create"/>
            {/* <button type="submit">Create</button> */}
        </form>
    </div>
    )
}

export default Form