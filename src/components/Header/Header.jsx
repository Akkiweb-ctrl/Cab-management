import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { loggedIn } from "../../store/atoms/login";
import { useRecoilState, useRecoilValue } from "recoil";

const Header = ({ setShowLogin, setLoginState }) => {
  const [page, setPage] = useState("Home");
  const [hasLoggedIn, setHasLoggedIn] = useRecoilState(loggedIn);

  const handleLoginOnClick = () => {
    setShowLogin(true);
    setLoginState(true);
  };
  const handleSignUpOnClick = () => {
    setShowLogin(true);
    setLoginState(false);
  };
  const handleLogoutOnClick = () => {
    setHasLoggedIn(false);
  };
  return (
    <div>
      <div className={styles["header-container"]}>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className={`fs-4 ${styles["name"]}`}>Black Cabs</span>
          </Link>
          {hasLoggedIn ? (
            <ul className="nav nav-pills">
              <li
                onClick={() => setPage("Home")}
                className="nav-item nav-link-item"
              >
                <Link
                  to="/home"
                  className={`nav-link ${
                    page === "Home" ? styles.active : ""
                  } ${styles["nav-link-item"]}`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li
                onClick={() => setPage("Features")}
                className="nav-item nav-link-item"
              >
                <a
                  href="#"
                  className={`nav-link ${
                    page === "Features" ? styles.active : ""
                  } ${styles["nav-link-item"]}`}
                >
                  View Calender
                </a>
              </li>
              <li
                onClick={() => setPage("Pricing")}
                className="nav-item nav-link-item"
              >
                <a
                  href="#"
                  className={`nav-link ${
                    page === "Pricing" ? styles.active : ""
                  } ${styles["nav-link-item"]}`}
                >
                  Pricing
                </a>
              </li>
              <li
                onClick={() => setPage("Pricing")}
                className="nav-item nav-link-item"
              >
                <a
                  href="#"
                  className={`nav-link ${
                    page === "Pricing" ? styles.active : ""
                  } ${styles["nav-link-item"]}`}
                >
                  History
                </a>
              </li>
              <li
                onClick={() => setPage("About")}
                className="nav-item nav-link-item"
              >
                <a
                  href="#"
                  className={`nav-link ${
                    page === "About" ? styles.active : ""
                  } ${styles["nav-link-item"]}`}
                >
                  About
                </a>
              </li>
              '
              <Link to={"/"}>
                <button
                  className="ml-4 cursor-pointer rounded px-4 py-1 bg-white text-black border-2 border-black"
                  onClick={handleLogoutOnClick}
                >
                  Logout
                </button>
              </Link>
            </ul>
          ) : (
            <ul className="grid grid-cols-4 items-center">
              <li
                onClick={() => setPage("FAQs")}
                className="nav-item nav-link-item"
              >
                <a href="#FAQs">FAQs</a>
                  </li>
              <li
                onClick={() => setPage("FAQs")}
                className="nav-item nav-link-item"
              >
                <a href="#FAQs">FAQs</a>
                </li>
              <li
                onClick={() => setPage("FAQs")}
                className="nav-item nav-link-item"
              >
                <a href="#FAQs">FAQs</a>
              </li>
              <div className="flex gap-x-4">
                <li
                  className="cursor-pointer rounded px-4 py-1 bg-black text-white"
                  onClick={handleLoginOnClick}
                >
                  Login
                </li>
                <li
                  className="cursor-pointer border-2 rounded px-2 py-1 border-black"
                  onClick={handleSignUpOnClick}
                >
                  Sign Up
                </li>
              </div>
            </ul>
          )}
        </header>
      </div>
    </div>
  );
};

export default Header;
