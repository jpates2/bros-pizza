import React from "react";
import classes from "./WhereSection.module.css";
import WhereCard from "./WhereCard";

const WhereSection = () => {
  return (
    <section className={classes["where__section"]}>
      <h1 className={classes["where__header"]}>WHERE WE ARE</h1>
      <div className={classes["where__cards-container"]}>
        <WhereCard />
      </div>
    </section>
  )
}

export default WhereSection;
