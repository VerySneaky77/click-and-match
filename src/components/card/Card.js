import React from "react";
import "./style.css";
import CardBody from "./CardBody";

class Card extends React.Component {
    state = {
        selected: this.props.selected,
        datasource: this.props.datasource,
        name: this.props.name
    }

    handleSelect = () => {
      this.props.handleGameProgress(this.state.selected);
      this.setState({ selected: ( this.state.selected ? false : true )});
  }

    render() {
        return (
            <div className="card text-center">
                <CardBody
                    datasource={this.state.datasource}
                    name={this.state.datasource}
                    handleSelect={this.handleSelect}
                />
            </div>
        );
    }
}

export default Card;