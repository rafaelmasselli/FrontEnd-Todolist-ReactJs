import React from "react";
import Card from "./../../components/sturcture/Child";
import "./style.css";
import Relogio from "./../../components/sturcture/relogio/index";

const Home = () => {
  return (
    <>
      <h1 className="Titulo">Todolist</h1>
      <Relogio />
      <Card />
    </>
  );
};

export default Home;
