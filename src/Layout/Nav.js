import classes from "./Nav.module.css";
import NavbarButton from "./NavbarButton";

const Nav = props => {
  return (
    <section className={classes["navbar-section"]}>
      <div>MENU</div>
      <div>WHO WE ARE</div>
      <NavbarButton />
      <div>WHERE WE ARE</div>
      <div>BOOKINGS</div>
    </section>
  )
}

export default Nav;
