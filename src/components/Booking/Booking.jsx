import React, { useContext } from 'react';
import styles from './Booking.module.css'
import { BookingsContext } from '../../store/BookingsContext';
import { useSetRecoilState } from 'recoil';
import { reschedule } from '../../store/atoms/reschedule';
import { ToReschedule } from '../../store/atoms/toReschedule';

const Booking = ({booking}) => {
    const {cancelBooking} = useContext(BookingsContext);
    const setShowReschedule = useSetRecoilState(reschedule);
    const setToReschedule = useSetRecoilState(ToReschedule);

    const handleReschedule = (booking) =>{
        setToReschedule(booking);
        setShowReschedule(true);

    }
    const handleCancel = (deleteItem) =>{
        cancelBooking(deleteItem);
    }
  return (
    <div className={styles["bookings-tab"]}>
    <div className={styles["status"]}>
      <p className={styles["booking-time"]}>{booking.time}</p>
      <div className={styles["booking-action"]}>
        <button onClick={()=>handleReschedule(booking)}>Reschedule</button>
        <button onClick={()=>handleCancel(booking)}>Cancel</button>
      </div>
    </div>
    <div>
      <p>PickUp location: {booking.pickup}</p>
      <p>Dropoff location: {booking.dropoff}</p>
      <p>Special request: {booking.specialRequests}</p>
    </div>
  </div>
  )
}

export default Booking
