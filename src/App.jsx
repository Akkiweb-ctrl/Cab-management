import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Reschedule from "./components/Reschedule/Reschedule";
import { BookingsContext } from "./store/BookingsContext";
import { useRecoilValue } from "recoil";
import { reschedule } from './store/atoms/reschedule';

function App() {
    const showReschedule = useRecoilValue(reschedule);

  return (
    <>
      {showReschedule === true ? (
        <div className="reschedule-container">
          <Reschedule></Reschedule>
        </div>
      ) :<></>}
       <div className="app-container">
          <div className="main-section">
            <Header className="header" />
            <Home ></Home>
          </div>{" "}
        </div>
    </>
  );
}

export default App;
