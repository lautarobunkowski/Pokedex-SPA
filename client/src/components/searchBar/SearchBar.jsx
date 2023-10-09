import { useState } from 'react';
import styles from "./SearchBar.module.css";

const SearchBar = () => {
    const [name, setName] = useState("")

    const handleChange = (event) => {
        setName(event.target.value)
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
    </div>
  )
}

export default SearchBar
