import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Botao from "./../../shared/Butoon/index";

const Card = (props) => {
  const tarefa = props.data;
  return (
    <div className="alinhar border border-5">
      <div className="card rounded-circle" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="mb-3">
            <h2 className="card-text">Tarefa</h2>
            <img
              className="imagem"
              src="https://images-cdn.newscred.com/Zz0zYTVmMjFjNDQ0OGIxMWViYmExMTE1NWU0ZjkwYzAwMg=="
            />
          </div>
          <h5 className="card-title">Titulo: {tarefa.titulo}</h5>
        </div>
        <div class="botao">
          <Link className="" to={`/Detalhes/${tarefa._id}`}>
            <Botao text="Ver detalhes" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
// <Link>Espionar</Link>;
