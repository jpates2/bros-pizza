import classes from "./Nav.module.css";
import NavbarButton from "./NavbarButton";

const Nav = props => {
  return (
    <section className={classes["navbar__section"]}>
      <div className={`${classes["navbar__link"]} ${classes["navbar__link-menu"]}`}>MENU</div>
      <div className={`${classes["navbar__link"]} ${classes["navbar__link-who"]}`}>WHO WE ARE</div>
      <NavbarButton />
      <div className={`${classes["navbar__link"]} ${classes["navbar__link-where"]}`}>WHERE WE ARE</div>
      <div className={`${classes["navbar__link"]} ${classes["navbar__link-bookings"]}`}>BOOKINGS</div>
    </section>
  )
}

export default Nav;
