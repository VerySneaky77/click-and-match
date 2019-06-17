import React from "react";
import Card from "./Card";

// Extending the React.Component class for GameSpace
class Counter extends React.Component {
    // Setting the initial state for score
    state = {
        scoreCurr: 0,
        scoreTop: 0,
        gameOver: false,
        spaceMap: []
    };

    // Randomize location of cards
    handleShuffle = () => {

    }

    // Increase score count by 1
    handleWin = () => {
        // Manage score, compare to top score
        this.setState({ scoreCurr: this.state.scoreCurr + 1 });
        
        if (this.state.scoreCurr > this.state.scoreTop) this.state.scoreTop = this.state.scoreCurr;

        // Shuffle the game space
        this.handleShuffle();
    };

    // Increase score count by 1
    handleLoss = () => {
        this.setState({ scoreCurr: this.state.gameOver = true });
        
    };

    // The render method returns the JSX that should be rendered
    render() {
        return (
            <div className="card text-center">
                <div className="card-header bg-primary text-white">
                    Click Counter!
          </div>
                <CardBody
                    count={this.state.count}
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                />
            </div>
        );
    }
}

export default Counter;