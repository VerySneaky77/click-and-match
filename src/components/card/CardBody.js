import React from "react";
import "./style.css";

// Card class accepts props to render content
function CardBody(props) {
  return (
    <div className="card text-center" chosen="false" onClick={props.handleSelect}>
      <div className="card-body">
        <img src={process.env.PUBLIC_URL + props.datasource} alt={props.name} />
      </div>
    </div>
  );
}

export default CardBody;