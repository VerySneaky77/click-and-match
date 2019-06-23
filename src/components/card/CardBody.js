import React from "react";
import "./style.css";

function CardBody(props) {
  return (
    <div className="card-body"  onClick={props.handleSelect}>
      <img src={process.env.PUBLIC_URL + props.datasource} alt={props.name} />
    </div>
  );
}

export default CardBody;