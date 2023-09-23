import classes from "./Header.module.css";

const Header = props => {
  return (
    <section className={classes["header-section"]}>
      <div className={classes["header__border-pattern"]}></div>
      <h1 className={classes["header__border-title"]}>BROS PIZZA</h1>
      <div className={`${classes["header__border-pattern"]} ${classes["header__border-pattern-bottom"]}`}></div>
    </section>
  )
}

export default Header;
