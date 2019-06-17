import React from "react";

// Extending the React.Component class for Card
class Card extends React.Component {
  // Initial state of Card component
  state = {
    valueIndex: 0,
    valueInfo: "",
    faceUp: false
  };
  
  Card(props) {
    return (
      <div className="card col-2 text-center">
        <div className="card-header bg-primary text-white">
          {this.state.valueInfo}
        </div>
        <div className="card-body">
        {/* Image to for the card. Implement this later */}
            {/* <img src={this.state.valueIndex} alt={this.state.valueInfo} /> */}
            <p>{this.state.valueInfo}</p>
        </div>
      </div>
    );
  }
}

export default Card;