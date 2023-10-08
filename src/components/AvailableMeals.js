import classes from "./AvailableMeals.module.css";

import MenuItem from "./MenuItem";
import useMeals from "../hooks/use-meals";

const AvailableMeals = (props) => {
  const meals = useMeals();

  const starterList = meals.starters.map((meal) => (
    <MenuItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  const pizzaList = meals.pizzas.map((meal) => (
    <MenuItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  const dessertList = meals.desserts.map((meal) => (
    <MenuItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))


  let menu;
  if (props.menuToDisplay === "starterList") {
    menu = starterList;
  }
  if (props.menuToDisplay === "pizzaList") {
    menu = pizzaList;
  }
  if (props.menuToDisplay === "dessertList") {
    menu = dessertList;
  }

  if (meals.httpError) {
    return (
      <div>
        <p className={classes["menu__error-text"]}>Error loading menu. Please refresh the page to try again.</p>
      </div>
    )
  }

  return (
    <div>
      <ul className={classes["available-meals__list"]}>
        {menu}
      </ul>
    </div>
  )
}

export default AvailableMeals;
