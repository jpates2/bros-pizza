import React from "react";
import classes from "./BookingSection.module.css";
import BookingForm from "./BookingForm";

const BookingSection = () => {
  return (
    <section className={classes["bookings__section"]} id="bookings">
      <h1 className={classes["bookings__header"]}>BOOKINGS</h1>
      <BookingForm />
    </section>
  )
}

export default BookingSection;
