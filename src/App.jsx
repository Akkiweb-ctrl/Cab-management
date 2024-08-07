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
import { Outlet } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPopup from "./components/LoginPopup/LoginPopup";

function App() {
    const showReschedule = useRecoilValue(reschedule);
    const [showLogin, setShowLogin ] = useState(false);
    const [loginState, setLoginState] = useState(true);


  return (
    <>
      {showReschedule === true ? (
        <div className="reschedule-container">
          <Reschedule></Reschedule>
        </div>
      ) :<></>}
      {showLogin === true ? (
          <LoginPopup setShowLogin={setShowLogin} setLoginState= {setLoginState} loginState= {loginState}></LoginPopup>

      ) :<></>}
       <div className="app-container">
          <div className="main-section">
            <Header className="header" setShowLogin={setShowLogin} setLoginState= {setLoginState} ></Header> 
            <Outlet></Outlet>
          </div>{" "}
        </div>
    </>
  );
}

export default App;
