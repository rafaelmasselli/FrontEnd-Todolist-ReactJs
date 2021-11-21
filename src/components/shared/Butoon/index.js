import React from "react";

const Butoon = (props) => {
  const descricao = props.text;
  return (
    <div>
      <button type="button" className="btn btn-outline-dark">
        {descricao}
      </button>
    </div>
  );
};

export default Butoon;
