import React from 'react'
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.Card}>
      <img className={styles.img} src={props.images.front_default} alt={props.name} />
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
