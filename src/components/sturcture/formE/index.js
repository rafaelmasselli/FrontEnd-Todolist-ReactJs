import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "./../../../api/index";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  const [tarefa, setTarefa] = useState({
    titulo: "",
    prioridade: "",
    status: "",
    prazo: "",
    descricao: "",
  });
  useEffect(() => {
    getTarefas();
  }, []);

  const getTarefas = async () => {
    const request = await api.fetchGetById(id);
    const tarefas = await request.json();
    setTarefa(tarefas);
  };

  const atualiza = (evento) => {
    const campos = { ...tarefa };
    campos[evento.target.name] = evento.target.value;
    setTarefa(campos);
  };

  const SubimitEnd = async (evento) => {
    evento.preventDefault();

    const tarefaN = { ...tarefa };

    const response = await api.fetchPut(tarefaN, id);

    if (response.status === 500) {
      alert("Erro no servidor tente novamente");
    } else if (response.status === 200) {
      const result = await response.json();
      alert(result.message);
      navigate(`/Detalhes/${id}`);
    }
  };

  return (
    <div>
      <form className="containe" onSubmit={SubimitEnd}>
        <div className="mb-3">
          <label for="titulo" className="form-label">
            Titulo
          </label>
          <input
            id="titulo"
            type="text"
            value={tarefa.titulo}
            className="form-control "
            placeholder="Nome da Tarefa"
            onChange={atualiza}
            name="titulo"
          />
        </div>
        <div className="mb-3">
          <label for="prioridade" className="form-label ">
            Prioridade
          </label>
          <select
            className="form-select form-select-lg mb-3 "
            aria-label=".form-select-lg example"
            value={tarefa.prioridade}
            id="prioridade"
            onChange={atualiza}
            name="prioridade"
          >
            <option value="Baixa">Baixa</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
            <option value="Muito alta">Muito alta</option>
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
            id="status"
            value={tarefa.status}
            onChange={atualiza}
            name="status"
          >
            <option value="Nao realizado">Nao Realizado</option>
            <option value="realizado">Realizando</option>
            <option value="Concluido">Concluido</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="prazo" className="form-label">
            Prazo
          </label>
          <input
            type="date"
            className="form-control"
            placeholder="Nome da Tarefa"
            id="prazo"
            value={tarefa.prazo}
            onChange={atualiza}
            min="2021-11-19"
            max="2100-11-19"
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
            value={tarefa.descricao}
            onChange={atualiza}
            name="descricao"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Editar tarefa
        </button>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Edit;
