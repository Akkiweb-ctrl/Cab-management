import React, { useContext, useRef } from 'react'
import styles from './Reschedule.module.css'
import { BookingsContext } from '../../store/BookingsContext';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { reschedule } from '../../store/atoms/reschedule';
import { ToReschedule } from '../../store/atoms/toReschedule';

const Reschedule = () => {
  const { updateBooking } = useContext(BookingsContext);
  const setShowReschedule = useSetRecoilState(reschedule);
  const toReschedule = useRecoilValue(ToReschedule)
  const inputForm = useRef(null);
  const handleReschedule = () =>{
    const form = inputForm.current;
    const booking = {
      pickup: form["pickup"].value,
      dropoff: form["dropoff"].value,
      time: form["date"].value + " - " + form["time"].value,
      specialRequests: form["req"].value,
    };
    updateBooking(booking);
    form["pickup"].value = "";
    form["dropoff"].value = "";
    form["date"].value = "";
    form["time"].value = "";
    form["req"].value = "";

    setShowReschedule(false);
  }

  return (
    <div className={styles["reschedule"]}> 
      <div className={styles["form-container"]}>
      <div>
        <h3 className={styles["title"]}>Reschedule</h3>
      </div>
      <form className={styles["booking-form"]} ref={inputForm}>
        <div className={styles["address"]}>
          <div className={styles["input"]}>
            <label htmlFor="pickup-location">Pickup location</label>
            <input type="text" id="pickup-location" name="pickup" defaultValue={toReschedule.pickup}/>
          </div>
          <div className={styles["input"]}>
            <label htmlFor="dropoff-location">Dropoff location</label>
            <input type="text" id="dropoff-location" name="dropoff" defaultValue={toReschedule.dropoff}/>
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
            <input type="text" id="special-req" name="req" defaultValue={toReschedule.specialRequests} />
          </div>
        </div>

        <div className={styles["btn-container"]}>
          <button onClick={handleReschedule} className={styles["book-cab-btn"]}>
           Reschedule
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Reschedule
