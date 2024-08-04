import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";

const Header = () => {
  const [page, setPage] = useState("Home");
  return (
    <div>
      <div className={styles["header-container"]}>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className={`fs-4 ${styles["name"]}`}>Black Cabs</span>
          </a>

          <ul className="nav nav-pills">
            <li
              onClick={() => setPage("Home")}
              className="nav-item nav-link-item"
            >
              <a
                href="#"
                className={`nav-link ${page === "Home" ? styles.active : ""} ${
                  styles["nav-link-item"]
                }`}
                aria-current="page"
              >
                Home
              </a>
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
              onClick={() => setPage("FAQs")}
              className="nav-item nav-link-item"
            >
              <a
                href="#"
                className={`nav-link ${page === "FAQs" ? styles.active : ""} ${
                  styles["nav-link-item"]
                }`}
              >
                FAQs
              </a>
            </li>
            <li
              onClick={() => setPage("About")}
              className="nav-item nav-link-item"
            >
              <a
                href="#"
                className={`nav-link ${page === "About" ? styles.active : ""} ${
                  styles["nav-link-item"]
                }`}
              >
                About
              </a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;
