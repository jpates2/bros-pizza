import React, { useState } from "react";
import classes from "./WhereSection.module.css";
import WhereCard from "./WhereCard";
import { useEffect } from "react";

const WhereSection = () => {
  const [locations, setLocations] = useState([]);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch("https://bros-pizza-2757a-default-rtdb.europe-west1.firebasedatabase.app/locations.json")

      if (!response.ok) {
        throw new Error("Something went wrong, please refresh the page");
      }

      const responseData = await response.json();

      const loadedLocations = [];

      for (const key in responseData) {
        loadedLocations.push({
          id: key,
          area: responseData[key].area,
          street: responseData[key].street,
          postcode: responseData[key].postcode,
          long: responseData[key].long,
          lat: responseData[key].lat,
        })
      }
      setLocations(loadedLocations);
    }

    fetchLocations().catch(error => {
      setHttpError(error.message);
    })
  }, []);

  if (httpError) {
    return <section>
      <p className={classes["meals-error"]}>Error loading locations. Please refresh the page to try again.</p>
    </section>
  }

  const locationsList = locations.map(location => (
    <WhereCard
      id={location.id}
      key={location.id}
      area={location.area}
      street={location.street}
      postcode={location.postcode}
      long={location.long}
      lat={location.lat}
    />
  ))

  return (
    <section className={classes["where__section"]} id="where">
      <h1 className={classes["where__header"]}>WHERE WE ARE</h1>
      <div className={classes["where__cards-container"]}>
        {locationsList}
      </div>
    </section>
  )
}

export default WhereSection;
