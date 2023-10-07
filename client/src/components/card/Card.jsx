import React from 'react'
import styles from "./Card.module.css";

const Card = (props) => {

  return (
    <div className={styles.Card}>
      <div className={styles.img_background} style={
      {
        backgroundImage: `url("./utils/types_backgrounds/${props.types[0]}.jpg")`,
      }
    }/>
      <img className={styles.img} src={props.images.front_default} alt={props.name}/>
      <div className={styles.info_pokemon}>
        <p>{props.name}</p>
        {
          props.types.length > 1?
          <div className="">
            <p>{props.types[0]}</p>
            <p>{props.types[1]}</p>
          </div>:
            <p>{props.types}</p>
        }
      </div>
    </div>
  )
}

export default Card
