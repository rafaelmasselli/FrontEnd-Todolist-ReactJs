import React from "react";
import "./style.css";

const Texto = (props) => {
  const dataCriacao = props.dataCriacao;
  const descricao = props.descricao;

  return (
    <div className="centro">
      <div class="alert alert-dark curve" role="alert">
        <br></br>
        <h1>Data de criação</h1>
        <h4>
          Ano/Mes/Dia/T/Hora<br></br>
          {dataCriacao}
        </h4>
        <h1>Descrição</h1>
        <div class="overflow-auto center">{descricao}</div>
        <br></br>
      </div>
    </div>
  );
};

export default Texto;
