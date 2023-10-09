import React from 'react'
import styles from "./Card.module.css";

const Card = (props) => {

  return (
    <div className={styles.Card}>
      <div className={styles.img_background} style={{backgroundImage: `url("./utils/types_backgrounds/${props.types[0]}.jpg")`,}
    }/>
      {<img className={styles.img} src={props.images.front_default} alt={props.name}/>}
      <div className={styles.info_pokemon}>
        <p className={styles.name}>{props.name}</p>
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
