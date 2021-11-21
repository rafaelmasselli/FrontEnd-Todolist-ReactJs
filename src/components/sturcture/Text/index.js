import React from "react";
import "./style.css";

const Texto = (props) => {
  const texto = props.prazo;
  const titulo = props.titulo;
  const status = props.status;
  const prioridade = props.prioridade;

  return (
    <div className="centro">
      <div class="alert alert-dark curve" role="alert">
        <br></br>
        <h4 className="alert-heading">
          <b>Titulo</b>
        </h4>
        <p>{titulo}</p>

        <h4>Status</h4>
        <p>{status}</p>

        <h4 className="alert-heading">Prioridade </h4>
        <p>{prioridade}</p>

        <h4 className="alert-heading">Prazo </h4>
        <p className="">{texto}</p>
      </div>
    </div>
  );
};

export default Texto;
