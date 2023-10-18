import Logo from "../../views/landing/International_Pokémon_logo.png";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";
import { BiMenuAltRight } from 'react-icons/bi';
import { useState } from "react";

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const handleClickMenu = () => {
        setMenu(!menu)
    }

  return (
    <div className={styles.Navbar}>
        <NavLink to="/home" className={styles.NavLink_logo}>
            <img src={Logo} className={styles.logo_navbar} alt="Pokemón"/>
        </NavLink>
        <BiMenuAltRight onClick={handleClickMenu} className={menu?`${styles.menu_icon} ${styles.menu_icon_active}`:styles.menu_icon}/>
        <div className={menu?`${styles.Navbar_information} ${styles.Navbar_information_active}`:styles.Navbar_information}>
        <ul>
            <li>
                <NavLink to="/home" className={styles.NavLink}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/form" className={styles.NavLink}>
                    Form
                </NavLink>
            </li>
            <li>
                <NavLink to="/About" className={styles.NavLink}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/" className={styles.NavLink}>
                    Close
                </NavLink>
            </li>
        </ul>
        <SearchBar/>
      </div>
    </div>
  )
}

export default Navbar
