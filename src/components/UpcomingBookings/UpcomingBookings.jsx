import React, { useContext, useState } from "react";
import styles from "./UpcomingBookings.module.css";
import { BookingsContext } from "../../store/BookingsContext";
import Booking from "../Booking/Booking";

const UpcomingBookings = ({setShowReschedule}) => {
  const { bookingList } = useContext(BookingsContext);
 
  return (
    <div className={styles["upcoming-bookings"]}>
      <div className={styles["title"]}>
        <h3 className="font-bold text-lg">Upcoming bookings</h3>
      </div>
      {bookingList.length === 0 
      ? <div><p>There are no cabs booked.</p></div> 
      :bookingList.map((booking, index) => {
        return (
         <Booking key = {index} booking= {booking}></Booking>
        );
      })}
    </div>
  );
};

export default UpcomingBookings;
