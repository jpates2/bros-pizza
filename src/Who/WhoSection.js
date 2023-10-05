import React from "react";
import classes from "./WhoSection.module.css";
import WhoSectionImages from "./WhoSectionImages";

const WhoSection = () => {
  return (
    <section className={classes["who__section"]} id="who">
      <h1 className={classes["who__header"]}>WHO WE ARE</h1>
      <WhoSectionImages />
      <p className={classes["who__text"]}>Welcome to Bros Pizza, a slice of Italy right here in the heart of London!</p>
      <p className={classes["who__text"]}>We're not your typical pizza joint – we're a bunch of friends who share an insatiable love for food and a passion for creating the perfect pizza. Our journey began when we embarked on a food-filled adventure to Italy, where we tasted some of the most mouthwatering pizzas imaginable. Inspired by the artistry and simplicity of Italian pizza-making, we decided to bring that same magic back to London.</p>
      <p className={classes["who__text"]}>At Bros Pizza, we're all about using the finest ingredients, crafting each pie with love, and serving up a slice of happiness to our amazing customers. So, whether you're a fellow pizza enthusiast or just looking for a delicious meal with friends, come on over and join our pizza-loving family!</p>
    </section>
  )
}

export default WhoSection;
