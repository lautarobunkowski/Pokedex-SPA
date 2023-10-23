// ---------  HOOKS  ---------
import { useDispatch } from "react-redux";
import { cerrarNavbar } from "../../redux/actions";
// ---------------------------------------------------------
import style from "./NotFound.module.css";

const NotFound = () => {
  const dispatch = useDispatch()
  return (
    <div className={style.Not_Found} onClick={() => dispatch(cerrarNavbar(false))}>
        404 Not Found
    </div>
  )
}

export default NotFound