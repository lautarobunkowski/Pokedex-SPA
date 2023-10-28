import { useState } from "react";
import styles from "./FilterByGen.module.css";
// Hooks -----------------------------------------
import { useDispatch, useSelector } from "react-redux";

const FilterByGen = () => {
  const firstGenGames = ["red", "yellow", "blue", "fireRed", "leafGreen"]
  const [currentGen, setCurrentGen] = useState({
    "firstGen": 0,
    "secondGen": 0,
    "thirdGen": 0,
  })

  const handleClick = (event) => {
    const nameTarget = event.target.name;
    if(nameTarget === "prevButton"){
      setCurrentGen((prevState) => (prevState.firstGen === 0 ? {...prevState, firstGen:firstGenGames.length - 1} : {...prevState, firstGen:prevState.firstGen - 1}));
    } else {
      setCurrentGen((prevState) => (prevState.firstGen === firstGenGames.length - 1 ? {...prevState, firstGen: 0} : {...prevState, firstGen:prevState.firstGen + 1}));
    }
  }

  return (
    <div className={styles.FilterByGen}>
      <div className={styles.firstGen}>
        <button name="prevButton" onClick={handleClick}>{`<`}</button>
        <input className={styles.firstGenGames} name="firstGen" type="image" src={`./utils/generationsGames/first gen/${firstGenGames[currentGen.firstGen]}.png`} alt={firstGenGames[currentGen]}/>
        <button name="nextButton" onClick={handleClick}>{`>`}</button>
      </div>
    </div>
  )
}

export default FilterByGen