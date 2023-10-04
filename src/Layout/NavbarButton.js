import classes from "./NavbarButton.module.css";
import { Link } from "react-router-dom";

const NavbarButton = props => {
  return (
    <button className={classes["navbar__button"]}><Link to="/order">ORDER NOW</Link></button>
  )
}

export default NavbarButton;
