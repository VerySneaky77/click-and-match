import React, { Component } from 'react';
import './App.css';
// import GameOverBox from "./components/text/GameOverBox";
import Card from "./components/card/Card";
import GameOverBox from "./components/text/GameOverBox";
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
  handleShuffle = () => {
    var temp = cards;

    for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [temp[i], temp[j]] = [temp[j], temp[i]]; // swap elements
    }

    this.setState({ cards: temp })
    console.log(cards);
  }

  handleGameProgress = selection => {
      // Check state of clicked card
      if (selection) {
          // No score change, game is over
          this.toggleGameOver();
          console.log("Game Over");
      }
      else {
          // Compare to top score
          this.setState({ scoreTop: this.state.scoreTop < this.state.scoreCurr + 1 ? this.state.scoreCurr + 1: this.state.scoreTop});
          // Increase score by 1
          this.setState({ scoreCurr: this.state.scoreCurr + 1 });
      }
      // Shuffle the game space
      this.handleShuffle();
  };

  toggleGameOver = () => {
    this.setState({ gameOver: this.state.gameOver ? false : true });
    console.log("Game Over: " + this.state.gameOver.toString());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Click Memory Game</h1>
          <p>Score: <span>{this.state.scoreCurr}</span></p>
          <p>Top Score: <span>{this.state.scoreTop}</span></p>
          {/* Hide or show the game over text */}
          <GameOverBox className={this.state.gameOver ? "Game-Over-show" : "Game-Over-hide"} />
        </header>
        <div className="wrapper">
            <div className="over-wrap">
                {this.props.gameOver ?
                    // game is over
                    this.state.cards.map(card => (
                        <Card
                            key={this.state.cards.indexOf(card)}
                            datasource={card.datasource}
                            name={card.name}
                            selected={false}
                            handleGameProgress={this.handleGameProgress}
                        />
                    ))
                    // game not over
                    : this.state.cards.map(card => (
                        <Card
                            key={this.state.cards.indexOf(card)}
                            datasource={card.datasource}
                            name={card.name}
                            handleGameProgress={this.handleGameProgress}
                        />
                    ))}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
