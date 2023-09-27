import React from "react";
import classes from "./WhereCard.module.css";

const WhereCard = (props) => {
  const mapLink = `https://www.google.com/maps/@${props.long},${props.lat},17z?entry=ttu`

  return (
    <div className={classes["where__card"]}>
      <h3 className={classes["where__card-title"]}>{props.area}</h3>
      <p className={classes["where__card-text"]}>{props.street}</p>
      <p className={`${classes["where__card-text"]} ${classes["where__card-text-bottom"]}`}>{props.postcode}</p>
      <a href={mapLink} target="_blank" rel="noreferrer" className={classes["where__card-link"]}>View location</a>
    </div>
  )
}

export default WhereCard;
