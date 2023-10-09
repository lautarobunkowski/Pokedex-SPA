import { useState } from 'react';
import styles from "./SearchBar.module.css";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";


const SearchBar = () => {
  const regexUnicode = /^\w+$/;
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClick = () => {
      if(regexUnicode.test(name)){
        return dispatch(getPokemonByName(name))
      }
      console.error('la busqueda debe de contener caracteres validos')
    }

  return (
    <div className={styles.SearchBar}>
      <input 
      onChange={handleChange} 
      className={styles.input_search} 
      type="search" 
      name="" 
      placeholder='Search'
      />
      <Button onClick={handleClick} text="Search"/>
    </div>
  )
}

export default SearchBar
