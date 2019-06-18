import React, { Component } from 'react';
import './App.css';
import CardBody from "./components/card/CardBody";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the array of cards
  state = {
    cards,
    scoreCurr: 0,
    scoreTop: 0,
    gameOver: false
  };

  // Randomize location of cards
  // handleShuffle = () => {

  // }

  // Increase score count by 1
  handleWin = () => {
    // Manage score, compare to top score
    this.setState({ scoreCurr: this.state.scoreCurr + 1 });

    if (this.state.scoreCurr > this.state.scoreTop) this.setState({ scoreCurr: this.state.scoreCurr });

    // Shuffle the game space
    // this.handleShuffle();
    return true;
  };

  // Increase score count by 1
  handleLoss = () => {
    this.setState({ gameOver: true });
    console.log("Game Over");
    return false;
  };

  handleSelect = () => {
    this.setState({ chosen: this.state.chosen ? this.state.handleLoss : this.state.handleWin })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Click Memory Game</h1>
        </header>
        <div className="wrapper">
          <div className="over-wrap">
            {this.state.cards.map(card => (
              <CardBody
                key={this.state.cards.indexOf(card)}
                datasource={card.datasource}
                name={card.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
