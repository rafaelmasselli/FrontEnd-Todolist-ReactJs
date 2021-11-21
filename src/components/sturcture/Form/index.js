import React from "react";
import "./style.css";
import api from "../../../api";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  let navigate = useNavigate();

  const onSubmitT = async (event) => {
    event.preventDefault();

    console.log(event.target.titulo.value);
    const titulo = event.target.titulo.value;
    const prioridade = event.target.prioridade.value;
    const status = event.target.status.value;
    const prazo = event.target.prazo.value;
    const descricao = event.target.descricao.value;

    const tarefa = {
      titulo,
      prioridade,
      status,
      prazo,
      descricao,
    };

    const request = await api.fetchPost(tarefa);
    if (request.status === 500) {
      alert("Preencha todos os campos corretamente");
    } else if (request.status === 200) {
      const result = await request.json();

      alert(result.message);
      navigate(`/`);
    }
  };

  return (
    <>
      <form className="containe" onSubmit={onSubmitT}>
        <div className="mb-3">
          <label for="titulo" class="form-label">
            Titulo
          </label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            className="form-control "
            placeholder="Nome da Tarefa"
          />
        </div>
        <div className="mb-3">
          <label for="prioridade" className="form-label ">
            Prioridade
          </label>
          <select
            className="form-select form-select-lg mb-3 "
            aria-label=".form-select-lg example"
            name="prioridade"
            id="prioridade"
          >
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baixa">Baixa</option>
          </select>
        </div>
        <div className="mb-3 ">
          <label for="prioridade" className="form-label">
            Status
          </label>
          <select
            className="form-select form-select-lg mb-3 "
            aria-label=".form-select-lg example"
            for="status"
            name="status"
            id="status"
          >
            <option value="Fazer">Fazer</option>
            <option value="Fazendo">Fazendo</option>
            <option value="Feito">Feito</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="prazo" className="form-label">
            Prazo
          </label>
          <input
            min="2021-11-19"
            max="2100-11-19"
            type="date"
            className="form-control"
            placeholder="Nome da Tarefa"
            id="prazo"
            name="prazo"
          />
        </div>
        <div className="mb-3">
          <label for="Descricao" className="form-label">
            Descricao
          </label>
          <textarea
            className="form-control"
            rows="3"
            id="descricao"
            name="descricao"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Adicionar Tarefa
        </button>
      </form>
      <br></br>
      <br></br>
    </>
  );
};

export default Form;
