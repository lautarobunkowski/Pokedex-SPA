import styles from "./Form.module.css";

const Form = () => {
  return (
    <form action="">
      <div className={styles.name_container}>
        <label htmlFor="#">Name</label>
        <input type="text" name="name"/>
      </div>
      <div className={styles.image_container}>
        <label htmlFor="#">image</label>
        <input type="text" name="image"/>
      </div>
      <div className={styles.health_container}>
        <label htmlFor="#">health</label>
        <input type="number" name="health"/>
      </div>
      <div className={styles.attack_container}>
        <label htmlFor="#">attack</label>
        <input type="number" name="attack"/>
      </div>
      <div className={styles.defense_container}>
        <label htmlFor="#">defense</label>
        <input type="number" name="defense"/>
      </div>
      <div className={styles.speed}>
        <label htmlFor="#">speed</label>
        <input type="number" name="speed"/>
      </div>
      <div className={styles.height_container}>
        <label htmlFor="#">height</label>
        <input type="number" name="height"/>
      </div>
      <div className={styles.weight_container}>
        <label htmlFor="#">weight</label>
        <input type="number" name="weight"/>
      </div>
    </form>
  )
}

export default Form