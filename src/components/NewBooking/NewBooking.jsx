import React, { useContext, useRef } from "react";
import styles from "./NewBooking.module.css";
import { BookingsContext } from "../../store/BookingsContext";
import { v4 as uuidv4 } from "uuid";

const NewBooking = () => {
  const { addBooking } = useContext(BookingsContext);
  const inputForm = useRef(null);
  const handleBookCab = () => {
    event.preventDefault();
    const form = inputForm.current;
    const unique_id  = uuidv4();
    // console.log(unique_id)
    const newBooking = {
      _id : unique_id,
      pickup: form["pickup"].value,
      dropoff: form["dropoff"].value,
      time: form["date"].value + " - " + form["time"].value,
      specialRequests: form["req"].value,
    };
    addBooking(newBooking);
    form["pickup"].value = "";
    form["dropoff"].value = "";
    form["date"].value = "";
    form["time"].value = "";
    form["req"].value = "";
  };
  return (
    <div className={styles["form-container"]}>
      <div>
        <h3 className={styles["title"]}>New Booking</h3>
      </div>
      <form className={styles["booking-form"]} ref={inputForm}>
        <div className={styles["address"]}>
          <div className={styles["input"]}>
            <label htmlFor="pickup-location">Pickup location</label>
            <input type="text" id="pickup-location" name="pickup" />
          </div>
          <div className={styles["input"]}>
            <label htmlFor="dropoff-location">Dropoff location</label>
            <input type="text" id="dropoff-location" name="dropoff" />
          </div>
        </div>

        <div className={styles["date-time"]}>
          <div className={styles["input"]}>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" />
          </div>
          <div className={styles["input"]}>
            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" />
          </div>
        </div>
        <div className={styles["req"]}>
          <div className={styles["input"]}>
            <label htmlFor="special-req">Special Request</label>
            <textarea type="text" id="special-req" name="req" />
          </div>
        </div>

        <div className={styles["btn-container"]}>
          <button onClick={handleBookCab} type = "Submit" 
          className={styles["book-cab-btn"]}>
            Book cab
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBooking;
