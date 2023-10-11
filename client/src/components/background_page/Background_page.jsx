import React from 'react'
import styles from "./Background_page.module.css";

const Background_page = ({background, color}) => {
  let pageBackground = '';
  if(background){
    pageBackground = `url(".${background}")`
  } else {
    pageBackground = undefined
  }

  let pageColor = '';
  if(color){
    pageColor = color;
  } else {
    pageColor = undefined
  }

  return (
    <div className={styles.background_page} style={{
        backgroundImage: pageBackground,
        backgroundColor: pageColor,
    }}/>
  )
}

export default Background_page