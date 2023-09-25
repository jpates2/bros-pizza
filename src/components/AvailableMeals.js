import React from "react";
import classes from "./AvailableMeals.module.css";

import MenuItem from "./MenuItem";

const DUMMY_MEALS = [
  {
    id: "p1",
    name: "MARGHERITA",
    description: "Tomato, mozzarella, basil",
    price: 8
  },
  {
    id: "p2",
    name: "PEPPERONI",
    description: "Tomato, mozzarella, pepperoni, basil",
    price: 8
  },
  {
    id: "p3",
    name: "VEGAN",
    description: "Tomato, vegan mozzarella, basil",
    price: 8
  },
  {
    id: "p4",
    name: "MARINARA",
    description: "Tomato, garlic, oregano",
    price: 8
  }
]

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MenuItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <div>
      <ul className={classes["available-meals__list"]}>
        {mealsList}
      </ul>
    </div>
  )
}

export default AvailableMeals;
