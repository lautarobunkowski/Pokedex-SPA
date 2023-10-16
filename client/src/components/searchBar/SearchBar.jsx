import { useState } from 'react';
import styles from "./SearchBar.module.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemonByName} from "../../redux/actions";


const SearchBar = () => {
  const regex= /^\w+$/;
  const dispatch = useDispatch();
  const [name, setName] = useState("")

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleClick = () => {
    if(regex.test(name)){
      return dispatch(getPokemonByName(name))
    }
    window.alert('la busqueda debe de contener caracteres validos')
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
      <Link to="/search">
        <Button onClick={handleClick} text="Search"/>
      </Link>
    </div>
  )
}

export default SearchBar
