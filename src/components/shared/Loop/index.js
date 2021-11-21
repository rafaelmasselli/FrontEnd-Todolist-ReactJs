import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Aba = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Link className="nav-link" to="/">
              <div className="logo">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/889/889648.png"
                  alt=""
                  width="30"
                  height="28"
                />
              </div>
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item home">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cadastro">
                  Cadastro
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Aba;
