import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";

import MenuItem from "./MenuItem";

const AvailableMeals = (props) => {
  const [starters, setStarters] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("https://bros-pizza-2757a-default-rtdb.europe-west1.firebasedatabase.app/meals.json");
      const responseData = await response.json();

      const pizzasData = [];
      const startersData = [];
      const dessertsData = [];

      for (const key in responseData.starters) {
        startersData.push({
          id: key,
          name: responseData.starters[key].name,
          description: responseData.starters[key].description,
          price: responseData.starters[key].price
        })
      }

      for (const key in responseData.pizzas) {
        pizzasData.push({
          id: key,
          name: responseData.pizzas[key].name,
          description: responseData.pizzas[key].description,
          price: responseData.pizzas[key].price
        })
      }

      for (const key in responseData.desserts) {
        dessertsData.push({
          id: key,
          name: responseData.desserts[key].name,
          description: responseData.desserts[key].description,
          price: responseData.desserts[key].price
        })
      }
      setStarters(startersData);
      setPizzas(pizzasData);
      setDesserts(dessertsData);
    }
    fetchMeals();
  }, [])

  const starterList = starters.map((meal) => (
    <MenuItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  const pizzaList = pizzas.map((meal) => (
    <MenuItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  const dessertList = desserts.map((meal) => (
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
