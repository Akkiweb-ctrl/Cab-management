import React from 'react'
import styles from './Home.module.css'
import UpcomingBookings from '../components/UpcomingBookings/UpcomingBookings'
import BookingsCalender from '../components/BookingsCalender/BookingsCalender'
import NewBooking from '../components/NewBooking/NewBooking'

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <UpcomingBookings></UpcomingBookings>
      <NewBooking  ></NewBooking>
    </div>
  )
}

export default Home
