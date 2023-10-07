// -------------Utils-------------
import Pokemon_logo from "./International_Pokémon_logo.png";
import styles from "./Landing.module.css";
// -----------components----------
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

const Landing = () => {


  return (
    <div className={styles.Landing}>
      <div className={styles.container_landing}>
        <img src={Pokemon_logo} className={styles.img_landing} alt="Pokemon_logo" />
        <Link to="/home">
          <Button text="Start"/>
        </Link>
      </div>
    </div>
  )
}

export default Landing