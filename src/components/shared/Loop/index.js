import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Aba = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <ul class="nav">
        <Link className="nav-link " to="/">
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/889/889648.png"
              alt=""
              width="30"
              height="28"
            />
          </div>
        </Link>

        <li className="nav-item home">
          <Link className="nav-link font" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link font" to="/cadastro">
            Cadastro
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Aba;
