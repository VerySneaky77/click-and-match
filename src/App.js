import React, { Component } from 'react';
import './App.css';
// import GameBox from "./components/GameBox";
import Card from "./components/card/Card";
import GameOverBox from "./components/text/GameOverBox";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the array of cards
  state = {
    cards,
    scoreCurr: 0,
    scoreTop: 0,
    gameOver: false,
    cssHide: "game-over-text-hide"
  };

  handleGameProgress = selection => {
    // Check state of clicked card
    if (selection && !(this.state.gameOver)) {
      // No score change, game is over
      this.setState({ gameOver: this.state.gameOver ? false : true });
      this.setState({ cssHide: "game-over-text-show" });
    }
    else if (!selection && !this.state.gameOver) {
      // Compare to top score
      if (this.state.scoreTop < this.state.scoreCurr + 1) { this.setState({ scoreTop: (this.state.scoreCurr + 1) }) };
      // Increase score by 1
      this.setState({ scoreCurr: this.state.scoreCurr + 1 });
      // Shuffle the game space
      this.handleShuffle();
    }
    else {
      // Game is over or something bugged out, reset
      this.setState({ cssHide: "game-over-text-hide" });
      this.setState({ scoreCurr: 1 });
      this.handleShuffle();
      this.setState({gameOver: false});
    }
  };

  // Randomize location of cards
  handleShuffle = () => {
    const cards = this.state.cards;

    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [cards[i], cards[j]] = [cards[j], cards[i]]; // swap elements
    }

    this.setState({ cards });
    console.log(cards);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Click Memory Game</h1>
          <p>Score: <span>{this.state.scoreCurr}</span></p>
          <p>Top Score: <span>{this.state.scoreTop}</span></p>
          {/* Hide or show the game over text */}
          <GameOverBox className={this.state.cssHide} />
        </header>
        <div className="wrapper">
          <div className="over-wrap">
            {this.state.cards.map(card => (
              this.props.gameOver ?
                // game is over
                <Card
                  key={card.name}
                  datasource={card.datasource}
                  name={card.name}
                  selected={false}
                  handleGameProgress={this.handleGameProgress}
                />
                // game not over
                : <Card
                  key={card.name}
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
