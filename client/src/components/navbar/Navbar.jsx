import Logo from "../../views/landing/International_Pokémon_logo.png";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";
import { BiMenuAltRight } from 'react-icons/bi';
import { useSelector, useDispatch } from "react-redux";
import { cerrarNavbar, clearAllStates, getAllPokemons, getPokemonTypes } from "../../redux/actions.js";
// icons -------------------------------------------
// import home from "./menu.png";
// import create from "./create.png";
// import close from "./close.png";

const Navbar = () => {
    const dispatch = useDispatch()
    const navbarVisible = useSelector(state => state.navbarVisible)

    const handleClickMenu = (event) => {
        if(event.target.name === "close"){
            dispatch(clearAllStates());
            dispatch(getAllPokemons());
            dispatch(getPokemonTypes());
        }
        dispatch(cerrarNavbar(!navbarVisible))
    }

  return (
    <div className={styles.Navbar}>
        <NavLink to="/home" className={styles.NavLink_logo}>
            <img src={Logo} className={styles.logo_navbar} alt="Pokemón"/>
        </NavLink>
        <BiMenuAltRight onClick={handleClickMenu} className={navbarVisible?`${styles.menu_icon} ${styles.menu_icon_active}`:styles.menu_icon}/>
        <div className={navbarVisible?`${styles.Navbar_information} ${styles.Navbar_information_active}`:styles.Navbar_information}>
        <ul>
            <li>
                <NavLink to="/home" className={styles.NavLink} onClick={handleClickMenu}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/form" className={styles.NavLink} onClick={handleClickMenu}>
                    Create
                </NavLink>
            </li>
            <li>
                <NavLink to="/" className={styles.NavLink} onClick={handleClickMenu}>
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
