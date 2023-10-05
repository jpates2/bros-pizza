import { Link, animateScroll as scroll } from "react-scroll";
import classes from "./Nav.module.css";
import NavbarButton from "./NavbarButton";

const Nav = props => {
  return (
    <section className={classes["navbar__section"]}>
      <div className={`${classes["navbar__link"]} ${classes["navbar__link-menu"]}`}>
        <Link to="menu" spy={true} smooth={true} offset={-100} duration={800}>
        MENU
        </Link>
      </div>
      <div className={`${classes["navbar__link"]} ${classes["navbar__link-who"]}`}>
        <Link to="who" spy={true} smooth={true} offset={-100} duration={800}>
          WHO WE ARE
        </Link>
      </div>
      <NavbarButton />
      <div className={`${classes["navbar__link"]} ${classes["navbar__link-where"]}`}>
        <Link to="where" spy={true} smooth={true} offset={-100} duration={800}>
          WHERE WE ARE
        </Link>
      </div>
      <div className={`${classes["navbar__link"]} ${classes["navbar__link-bookings"]}`}>
        <Link to="bookings" spy={true} smooth={true} offset={-100} duration={800}>
          BOOKINGS
        </Link>
      </div>
    </section>
  )
}

export default Nav;
