import React from "react";
import classes from "./WhereSection.module.css";
import WhereCard from "./WhereCard";

const LOCATIONS = [
  {
    id: "l1",
    area: "Balham",
    street: "147 Balham High Road",
    postcode: "SW12 9AU",
    long: "51.4442723",
    lat: "-0.1547179"
  },
  {
    id: "l2",
    area: "Wapping",
    street: "41 Thomas More St",
    postcode: "E1W 1YY",
    long: "51.5067861",
    lat: "-0.0718934"
  },
  {
    id: "l3",
    area: "Barbican",
    street: "1 Bartholomew Close",
    postcode: "EC1A 7BB",
    long: "51.517846",
    lat: "-0.099103"
  }
]

const WhereSection = () => {
  const locationsList = LOCATIONS.map(location => (
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
