import React from "react";
import classes from "./WhoSection.module.css";
import WhoSectionImages from "./WhoSectionImages";

const WhoSection = () => {
  return (
    <section className={classes["who__section"]}>
      <h1 className={classes["who__header"]}>WHO WE ARE</h1>
      <WhoSectionImages />
      <p className={classes["who__text"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum tenetur animi fugiat aspernatur dolorum veniam, unde, blanditiis facilis accusantium eum quo nam nesciunt odio illo quis quia exercitationem, corrupti iusto facere? Accusamus consequatur odio nesciunt soluta quos libero excepturi aspernatur. Magnam nisi, fuga fugit modi corrupti ad deleniti saepe?</p>
    </section>
  )
}

export default WhoSection;
