import React, { useState, useEffect } from "react";
import "./style.css";
import Texto from "../../components/sturcture/Text/index";
import { useParams } from "react-router-dom";
import api from "./../../api/index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const Detalhes = (props) => {
  const [tarefa, setTarefa] = useState({
    titulo: "",
    prioridade: "",
    status: "",
    prazo: "",
    descricao: "",
  });

  const [open, setOpen] = useState(false);

  const TrueModal = () => {
    setOpen(true);
  };
  const FalseModal = () => {
    setOpen(false);
  };

  let navigate = useNavigate();
  useEffect(() => {
    getByid();
  }, []);

  const paramns = useParams();
  const id = paramns.id;

  const getByid = async () => {
    const request = await api.fetchGetById(id);
    const response = await request.json();
    setTarefa(response);
  };

  const getDelete = async (evento) => {
    evento.preventDefault();
    const response = await api.fetchDelete(id);
    if (response.status === 500) {
      alert("Erro no servidor tente novamente");
    } else if (response.status === 200) {
      const result = await response.json();
      alert(result.message);
      navigate("/");
    }
  };

  return (
    <div className="">
      <h1>Tarefa</h1>
      <Texto
        titulo={tarefa.titulo}
        status={tarefa.status}
        prioridade={tarefa.prioridade}
        prazo={tarefa.prazo}
        descricao={tarefa.descricao}
      />

      <div className="d-flex align-content-around flex-wrap">
        <p></p>
      </div>

      <div className="container">
        <Link className="mb-0" to={`/Edit/${tarefa._id}`}>
          <button type="button" class="btn btn-outline-dark botao">
            Editar
          </button>
        </Link>
        <div>
          <button onClick={TrueModal} className="btn btn-outline-secondary">
            Excluir
          </button>
          <Modal open={open} onClose={FalseModal} className="alert alert-info">
            <h2 className="my-4">Deseja realmente excluir?</h2>
            <div className="centro">
              <button
                type="button"
                className="btn btn-outline-dark botoes "
                onClick={getDelete}
              >
                Sim
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary botoes"
                onClick={FalseModal}
              >
                Nao
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
