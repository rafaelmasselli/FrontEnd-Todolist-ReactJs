import React, { useState, useEffect } from "react";
import Card from "../Card";
import "./style.css";
import API from "./../../../api/index";

const Cardapi = () => {
  const [tarefa, setTarefas] = useState([]);

  useEffect(() => {
    getTarefas();
  }, []);

  const getTarefas = async () => {
    const request = await API.fetchGetAll();
    const data = await request.json();
    setTarefas(data);
  };

  return (
    <div className="container">
      {tarefa.map((tarefa) => (
        <Card data={tarefa} key={tarefa._id} />
      ))}
    </div>
  );
};

export default Cardapi;
