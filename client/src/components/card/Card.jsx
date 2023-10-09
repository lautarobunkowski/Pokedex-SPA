import React from 'react'
import styles from "./Card.module.css";
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from "react-redux";
import { getPagePokemons } from "../../redux/actions";
import { Link } from "react-router-dom";

const Card = (props) => {
  const dispatch = useDispatch()
  const {numberPage, showPokemons} = useSelector(state => state)
  const handleClick = () => {
    dispatch(getPagePokemons(numberPage))
  }

  return (
    <div className={styles.Card}>
      <div className={styles.img_background} style={{backgroundImage: `url("./utils/types_backgrounds/${props.types[0]}.jpg")`,}
    }/>
    {showPokemons.length === 1 &&
      <button onClick={handleClick} className={styles.close_button}>
        <AiOutlineClose/>
      </button>
    }
      <img className={styles.img} src={props.images.front_default} alt={props.name}/>
      <div className={styles.info_pokemon}>
      <Link to={`/${props.id}`} className={styles.Link}>
        <p>{props.name}</p>
      </Link>
        
        {
          props.types.length > 1?
          <div className={styles.types_pokemon}>
            <div className={styles.types_pokemon1}>
              <img src={`./utils/types_icons/${props.types[0]}.png`} alt="" />
              <p>{props.types[0]}</p>
            </div>
            <div className={styles.types_pokemon2}>
            <img src={`./utils/types_icons/${props.types[1]}.png`} alt="" />
              <p>{props.types[1]}</p>
            </div>
          </div>:
          <div className={styles.types_pokemon}>
            <div className={styles.types_pokemon1}>
              <img src={`./utils/types_icons/${props.types[0]}.png`} alt="" />
              <p>{props.types}</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Card
