import classes from "./OrderMeals.module.css";

import OrderMenuItem from "./OrderMenuItem";
import useMeals from "../hooks/use-meals";

const OrderMeals = (props) => {
  const meals = useMeals();

  const starterList = meals.starters.map((meal) => (
    <OrderMenuItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  const pizzaList = meals.pizzas.map((meal) => (
    <OrderMenuItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  const dessertList = meals.desserts.map((meal) => (
    <OrderMenuItem
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
        <p className={classes["order-menu__error-text"]}>Error loading menu. Please refresh the page to try again.</p>
      </div>
    )
  }

  return (
    <div>
      <ul className={classes["order-meals__list"]}>
        {menu}
      </ul>
    </div>
  )
}

export default OrderMeals;
