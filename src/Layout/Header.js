import classes from "./Header.module.css";

const Header = props => {
  return (
    <section className={classes["header-section"]}>
      <div className={classes["header__border-pattern"]}></div>
      <div className={classes["header__border-title"]}>

        <span className={classes["header__border-title-bros"]}>BROS</span>
        <span className={classes["header__border-title-pizza"]}>PIZZA</span>
        <img alt="543-pizza-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/543-pizza-1.svg/512px-543-pizza-1.svg.png" className={classes["header__border-img"]} />
      </div>
      <div className={`${classes["header__border-pattern"]} ${classes["header__border-pattern-bottom"]}`}></div>

    </section>
  )
}

// <a href="https://commons.wikimedia.org/wiki/File:543-pizza-1.svg">Vincent Le Moign</a>, <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>, via Wikimedia Commons

export default Header;
