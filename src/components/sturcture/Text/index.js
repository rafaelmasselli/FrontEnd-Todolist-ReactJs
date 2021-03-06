import React from "react";
import "./style.css";

const Texto = (props) => {
  const texto = props.prazo;
  const titulo = props.titulo;
  const status = props.status;
  const prioridade = props.prioridade;
  const dataCriacao = props.dataCriacao;

  return (
    <div className="centro">
      <div class="alert alert-dark curve3" role="alert">
        <br></br>
        <h4 className="alert-heading">
          <b>Titulo</b>
        </h4>
        <p className="color">{titulo}</p>

        <h4>Status</h4>
        <p className="color">{status}</p>

        <h4 className="alert-heading">Prioridade </h4>
        <p className="color">{prioridade}</p>

        <h4 className="alert-heading">Prazo </h4>
        <p className="position"></p>
        <p className="color">
          Ano/Mes/Dia <br></br>
          {texto}
        </p>
      </div>
    </div>
  );
};

export default Texto;
