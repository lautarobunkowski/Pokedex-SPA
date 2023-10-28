import { useState } from "react";
import styles from "./FilterByGen.module.css";
// Hooks -----------------------------------------
import { useDispatch, useSelector } from "react-redux";

const FilterByGen = () => {
  const dispatch = useDispatch()
  const currentGen = useSelector(state => state.currentGen)


  const generationArrays = {
    "firstGen": ["red", "yellow", "blue", "fireRed", "leafGreen"],
    "secondGen": ["red", "yellow", "blue", "fireRed", "leafGreen"],
    "thirdGen": ["red", "yellow", "blue", "fireRed", "leafGreen"],
    "fourthGen": ["red", "yellow", "blue", "fireRed", "leafGreen"],
    "fifthGen": ["red", "yellow", "blue", "fireRed", "leafGreen"],
    "sixthGen": ["red", "yellow", "blue", "fireRed", "leafGreen"],
    "seventhGen": ["red", "yellow", "blue", "fireRed", "leafGreen"],
    "eighthGen": ["red", "yellow", "blue", "fireRed", "leafGreen"],
    "ninthGen": ["red", "yellow", "blue", "fireRed", "leafGreen"],
    // Agrega más generaciones aquí...
  };

  const [currentGame, setCurrentGen] = useState({
    "firstGen": 0,
    "secondGen": 0,
    "thirdGen": 0,
    "fourthGen": 0,
    "fifthGen": 0,
    "sixthGen": 0,
    "seventhGen": 0,
    "eighthGen": 0,
    "ninthGen": 0,
  })

  const handleClickSlider = (event) => {
    const nameTarget = event.target.name;
    const currentGenName = event.target.getAttribute("data-generation");

    if(nameTarget === "prevButton"){
      setCurrentGen((prevState) => ({...prevState,[currentGenName]:prevState[currentGenName] === 0
          ? generationArrays[currentGenName].length - 1
          : prevState[currentGenName] - 1,
      }));
    } else {
      setCurrentGen((prevState) => ({...prevState,[currentGenName]:prevState[currentGenName] === generationArrays[currentGenName].length - 1
          ? 0
          : prevState[currentGenName] + 1,
      }));
    }
  }

  const handleChangeSubmit = (event) => {
    const nameTarget = event.target.name;
  }

  return (
    <div className={styles.FilterByGen}>
      <div className={`${styles.firstGen} ${styles.containerGens}`}>
        <button name="prevButton" data-generation="firstGen" onClick={handleClickSlider}>{`<`}</button>
        <img className={styles.gamesImages} name="firstGen" src={`./utils/generationsGames/first gen/${generationArrays.firstGen[currentGame.firstGen]}.png`} alt={generationArrays.firstGen[currentGame]}/>
        <button name="nextButton" data-generation="firstGen" onClick={handleClickSlider}>{`>`}</button>
      </div>
      <div className={`${styles.secondGen} ${styles.containerGens}`}>
        <button name="prevButton" data-generation="secondGen" onClick={handleClickSlider}>{`<`}</button>
        <img className={styles.gamesImages} name="secondGen" src={`./utils/generationsGames/first gen/${generationArrays.firstGen[currentGame.secondGen]}.png`} alt={generationArrays.firstGen[currentGame]}/>
        <button name="nextButton" data-generation="secondGen" onClick={handleClickSlider}>{`>`}</button>
      </div>
      <div className={`${styles.thirdGen} ${styles.containerGens}`}>
        <button name="prevButton" data-generation="thirdGen" onClick={handleClickSlider}>{`<`}</button>
        <img className={styles.gamesImages} name="thirdGen" src={`./utils/generationsGames/first gen/${generationArrays.firstGen[currentGame.secondGen]}.png`} alt={generationArrays.firstGen[currentGame]}/>
        <button name="nextButton" data-generation="thirdGen" onClick={handleClickSlider}>{`>`}</button>
      </div>
      <div className={`${styles.fourthGen} ${styles.containerGens}`}>
        <button name="prevButton" data-generation="fourthGen" onClick={handleClickSlider}>{`<`}</button>
        <img className={styles.gamesImages} name="fourthGen" src={`./utils/generationsGames/first gen/${generationArrays.firstGen[currentGame.secondGen]}.png`} alt={generationArrays.firstGen[currentGame]}/>
        <button name="nextButton" data-generation="fourthGen" onClick={handleClickSlider}>{`>`}</button>
      </div>
      <div className={`${styles.fifthGen} ${styles.containerGens}`}>
        <button name="prevButton" data-generation="fifthGen" onClick={handleClickSlider}>{`<`}</button>
        <img className={styles.gamesImages} name="fifthGen" src={`./utils/generationsGames/first gen/${generationArrays.firstGen[currentGame.secondGen]}.png`} alt={generationArrays.firstGen[currentGame]}/>
        <button name="nextButton" data-generation="fifthGen" onClick={handleClickSlider}>{`>`}</button>
      </div>
      <div className={`${styles.sixthGen} ${styles.containerGens}`}>
        <button name="prevButton" data-generation="sixthGen" onClick={handleClickSlider}>{`<`}</button>
        <img className={styles.gamesImages} name="sixthGen" src={`./utils/generationsGames/first gen/${generationArrays.firstGen[currentGame.secondGen]}.png`} alt={generationArrays.firstGen[currentGame]}/>
        <button name="nextButton" data-generation="sixthGen" onClick={handleClickSlider}>{`>`}</button>
      </div>
      <div className={`${styles.seventhGen} ${styles.containerGens}`}>
        <button name="prevButton" data-generation="seventhGen" onClick={handleClickSlider}>{`<`}</button>
        <img className={styles.gamesImages} name="seventhGen" src={`./utils/generationsGames/first gen/${generationArrays.firstGen[currentGame.secondGen]}.png`} alt={generationArrays.firstGen[currentGame]}/>
        <button name="nextButton" data-generation="seventhGen" onClick={handleClickSlider}>{`>`}</button>
      </div>
      <div className={`${styles.eighthGen} ${styles.containerGens}`}>
        <button name="prevButton" data-generation="eighthGen" onClick={handleClickSlider}>{`<`}</button>
        <img className={styles.gamesImages} name="eighthGen" src={`./utils/generationsGames/first gen/${generationArrays.firstGen[currentGame.secondGen]}.png`} alt={generationArrays.firstGen[currentGame]}/>
        <button name="nextButton" data-generation="eighthGen" onClick={handleClickSlider}>{`>`}</button>
      </div>
      <div className={`${styles.ninthGen} ${styles.containerGens}`}>
        <button name="prevButton" data-generation="ninthGen" onClick={handleClickSlider}>{`<`}</button>
        <img className={styles.gamesImages} name="ninthGen" src={`./utils/generationsGames/first gen/${generationArrays.firstGen[currentGame.secondGen]}.png`} alt={generationArrays.firstGen[currentGame]}/>
        <button name="nextButton" data-generation="ninthGen" onClick={handleClickSlider}>{`>`}</button>
      </div>
    </div>
  )
}

export default FilterByGen