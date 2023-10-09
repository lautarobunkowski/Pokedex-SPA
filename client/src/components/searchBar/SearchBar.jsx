import { useEffect, useState } from 'react';
import styles from "./SearchBar.module.css";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByName, getPagePokemons } from "../../redux/actions";


const SearchBar = () => {
  const regex= /^\w+$/;
  const dispatch = useDispatch();
  const [name, setName] = useState("")
  const numberPage = useSelector(state => state.numberPage)

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleClick = () => {
    if(regex.test(name)){
      return dispatch(getPokemonByName(name))
    }
    window.alert('la busqueda debe de contener caracteres validos')
  }

  useEffect(() => {
    if (name.length === 0) {
      dispatch(getPagePokemons(numberPage));
    }
  }, [name, dispatch, numberPage]);

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
