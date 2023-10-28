import { useState } from "react";
import styles from "./FilterByGen.module.css";
// Hooks -----------------------------------------
import { useDispatch, useSelector } from "react-redux";

const FilterByGen = () => {
  const firstGenGames = ["red", "yellow", "blue", "fireRed", "leafGreen"]
  const [currentGen, setCurrentGen] = useState(0)

  const goToPreviousGen = () => {
    setCurrentGen((prevGen) => (prevGen === 0 ? firstGenGames.length - 1 : prevGen - 1));
  };
  
  const goToNextGen = () => {
    setCurrentGen((prevGen) => (prevGen === firstGenGames.length - 1 ? 0 : prevGen + 1));
  };

  return (
    <div className={styles.FilterByGen}>
      <div className={styles.firstGen}>
        <button onClick={goToPreviousGen}>{`<`}</button>
        <input className={styles.firstGenGames} name="firstGen" type="image" src={`./utils/generationsGames/first gen/${firstGenGames[currentGen]}.png`} alt={firstGenGames[currentGen]}/>
        <button onClick={goToNextGen}>{`>`}</button>
      </div>
    </div>
  )
}

export default FilterByGen