import styles from "./Form.module.css";
// ---------  HOOKS  ---------
import { useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import { createPokemon, cerrarNavbar } from "../../redux/actions";
import axios from "axios";
// ---------------------------------
import validation from "./validation";
import validationSubmit from "./validationSubmit";
import Button from "../../components/button/Button";
import validationErrors from "./validationErrors";
import undefinedPokemon from "./undefinedPokemon.png";

const Form = () => {
    const dispatch = useDispatch();
    const pokemonTypes = useSelector(state => state.pokemonTypes)
    const [pokemon, setPokemon] = useState({
        name: "",
        image: "",
        health: 1,
        attack:5,
        defense:5,
        speed:5,
        height:null,
        weight:null,
        types: []
    })
    const [errors, setErrors] = useState({})
    const [image, setImage] = useState(null)

    const handleChange = (event) => {
        const property = event.target.name;
        let value = event.target.value;

        if(property === "image"){
            return setImage(event.target.files[0])
        }

        if(property === "health" || property === "attack" || property === "defense" || property === "speed" || property === "height" || property === "weight"){
            value = Number(value)
        }

        setPokemon({...pokemon, [property]:value})
        setErrors(validation({...pokemon, [property]:value})) //validacion de campos
    }

    const submitImage = async() => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset","dynh9dt8");

        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/duy9efu8j/image/upload',formData)
            return response.data.url
        } catch (error) {
            return false
        }
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
    const handleSubmit = async(e) => {
        // - Evito recargar el formulario
        e.preventDefault();
        // ------------------------------
        // subo la imagen ---------------
        const urlImage = await submitImage()
        if(urlImage === false){
            return
        }
        // setPokemon({...pokemon, image: urlImage})
        // - Valido el formulario antes de enviar, lo almaceno en una copia porque react no actualiza el estado hasta su siguiente renderizacion
        // y lo necesito para validar que no contenga errores antes de enviar
        const newErrors = validationSubmit({...pokemon, image: urlImage})
        setErrors(newErrors)
        if(validationErrors(newErrors)){
            if(dispatch(createPokemon({...pokemon, image: urlImage}))){
                window.alert("pokemon creado")
            } else {
                window.alert("pokemon")
            }
        } else {
            window.alert("No se han requerido los datos obligatorios")
        }
    }

    return (<div className={styles.form_container} onClick={() => dispatch(cerrarNavbar(false))}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Create your Pokemon!</h2>
            <div className={styles.inputs_container}>
                <div className={styles.image_container}>
                    <label htmlFor="image">image</label>
                    {image? <img src={URL.createObjectURL(image)} alt={pokemon.name} className={styles.pokemon_image}/>: <img src={undefinedPokemon} alt="undefinedPokemon" className={styles.undefined_image}/>}
                    <input type="file" name="image" id="image" accept=".jpg, .png, image/*" required onChange={handleChange}/>
                </div>
                <div className={styles.name_container}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={handleChange}/>
                    <p>{errors.name}</p>
                </div>
                <div className={styles.health_container}>
                    <label htmlFor="health">health</label>
                    <input type="range" min="1" max="250" name="health" id="health" onChange={handleChange}/>
                    <p>{pokemon.health}</p>
                </div>
                <div className={styles.attack_container}>
                    <label htmlFor="attack">attack</label>
                    <input type="range" min="5" max="200" name="attack" id="attack" onChange={handleChange}/>
                    <p>{pokemon.attack}</p>
                </div>
                <div className={styles.defense_container}>
                    <label htmlFor="defense">defense</label>
                    <input type="range" min="5" max="200" name="defense" id="defense" onChange={handleChange}/>
                    <p>{pokemon.defense}</p>
                </div>
                <div className={styles.speed_container}>
                    <label htmlFor="speed">speed</label>
                    <input type="range" min="5" max="200" name="speed" id="speed" onChange={handleChange}/>
                    <p>{pokemon.speed}</p>
                </div>
                <div className={styles.height_container}>
                    <label htmlFor="height">height</label>
                    <input type="number" name="height" id="height" onChange={handleChange}/>
                    <p>{errors.height}</p>
                </div>
                <div className={styles.weight_container}>
                    <label htmlFor="weight">weight</label>
                    <input type="number" name="weight" id="weight" onChange={handleChange}/>
                    <p>{errors.weight}</p>
                </div>
            </div>
            <div className={styles.types_container}>
                <p className={styles.types_error}>{errors.types}</p>
                {
                pokemonTypes?pokemonTypes.map(type => {
                    return(
                        <div className={styles[`${type.type}Type_container`]}>
                            <img src={`./utils/types_icons/${type.type}.svg`} alt={type.type}/>
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
        </form>
    </div>
    )
}

export default Form