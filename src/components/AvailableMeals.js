import React, { useState } from "react";
import classes from "./AvailableMeals.module.css";

import MenuItem from "./MenuItem";

const DUMMY_STARTERS = [
  {
    id: "s1",
    name: "BRUSCHETTA",
    description: "Tomato, mozzarella, basil",
    price: 8
  },
  {
    id: "s2",
    name: "ARANCINI",
    description: "Tomato, mozzarella, pepperoni, basil",
    price: 8
  },
  {
    id: "s3",
    name: "BURRATA",
    description: "Tomato, vegan mozzarella, basil",
    price: 8
  },
  {
    id: "s4",
    name: "PARMA HAM",
    description: "Tomato, garlic, oregano",
    price: 8
  }
]

const DUMMY_PIZZAS = [
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

const DUMMY_DESSERTS = [
  {
    id: "d1",
    name: "TIRAMISU",
    description: "Tomato, mozzarella, basil",
    price: 8
  },
  {
    id: "d2",
    name: "CANNOLI",
    description: "Tomato, mozzarella, pepperoni, basil",
    price: 8
  },
  {
    id: "d3",
    name: "PROFITEROLES",
    description: "Tomato, vegan mozzarella, basil",
    price: 8
  },
  {
    id: "d4",
    name: "LEMON MERINGUE PIE",
    description: "Tomato, garlic, oregano",
    price: 8
  }
]

const AvailableMeals = (props) => {
  const starterList = DUMMY_STARTERS.map((meal) => (
    <MenuItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  const pizzaList = DUMMY_PIZZAS.map((meal) => (
    <MenuItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  const dessertList = DUMMY_DESSERTS.map((meal) => (
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

  return (
    <div>
      <ul className={classes["available-meals__list"]}>
        {menu}
      </ul>
    </div>
  )
}

export default AvailableMeals;
