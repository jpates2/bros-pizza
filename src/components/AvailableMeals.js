import React, { useState } from "react";
import classes from "./AvailableMeals.module.css";

import MenuItem from "./MenuItem";

const DUMMY_STARTERS = [
  {
    id: "s1",
    name: "BRUSCHETTA",
    description: "Toasted focaccia, tomato, basil, garlic oil",
    price: 8
  },
  {
    id: "s2",
    name: "MEATY ARANCINI",
    description: "Stuffed and fried rice balls, beef ragu, parmesan",
    price: 8
  },
  {
    id: "s3",
    name: "VEGGIE ARANCINI",
    description: "Stuffed and fried rice balls, mushrooms, taleggio",
    price: 8
  },
  {
    id: "s4",
    name: "BURRATA",
    description: "Burrata di Puglia, marinara sauce, pesto",
    price: 8
  },
  {
    id: "s5",
    name: "PARMA HAM",
    description: "Prosciutto di Parma DOP, warm focaccia",
    price: 8
  },
  {
    id: "s6",
    name: "MEATBALLS",
    description: "Pork meatballs, marinara sauce, parmesan",
    price: 8
  }
]

const DUMMY_PIZZAS = [
  {
    id: "p1",
    name: "MARINARA",
    description: "Tomato, garlic, oregano",
    price: 6
  },
  {
    id: "p2",
    name: "MARGHERITA",
    description: "Tomato, mozzarella, basil",
    price: 8
  },
  {
    id: "p3",
    name: "PEPPERONI",
    description: "Tomato, mozzarella, pepperoni",
    price: 10
  },
  {
    id: "p4",
    name: "NDUJA",
    description: "Tomato, mozzarella, nduja, salami, honey",
    price: 11
  },
  {
    id: "p5",
    name: "AUBERGINE PARM",
    description: "Tomato, mozzarella, aubergine, parmesan, breadcrumbs",
    price: 10
  },
  {
    id: "p6",
    name: "PARMA",
    description: "Tomato, mozzarella, parma ham, rocket, parmesan",
    price: 12
  },
  {
    id: "p7",
    name: "BIANCA",
    description: "Ricotta, mozzarella, garlic, oregano",
    price: 11
  },
  {
    id: "p8",
    name: "BUFFALO",
    description: "Tomato, buffalo mozzarella, sundried tomatoes, pesto",
    price: 14
  },
  {
    id: "p9",
    name: "VEGANDUJA",
    description: "Tomato, vegan mozzarella, vegan nduja, mushrooms",
    price: 10
  },
  {
    id: "p10",
    name: "PARMA",
    description: "Tomato, vegan mozzarella, roasted broccoli, charred aubergine, caramalised onions",
    price: 8
  },
]

const DUMMY_DESSERTS = [
  {
    id: "d1",
    name: "TIRAMISU",
    description: "Sponge, coffee, chocolate, cream, rum",
    price: 8
  },
  {
    id: "d2",
    name: "CANNOLI",
    description: "Ricotta filling, pistachio, dark chocolate",
    price: 8
  },
  {
    id: "d3",
    name: "PROFITEROLES",
    description: "Choux pastry, cream, chocolate sauce, hazelnuts",
    price: 8
  },
  {
    id: "d4",
    name: "LEMON MERINGUE PIE",
    description: "Sweet pastry, lemon curd, whipped meringue",
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
