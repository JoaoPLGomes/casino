import React from 'react';

import './Exercise4.scss';

export class Exercise4 extends React.Component<any> {
    private reel1 = ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon'];
    private reel2 = ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon'];
    private reel3 = ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon'];

    state = {
        coins: 20,
        results: ['', '', ''],
        coinsGained: '',
    };

    getRandomValue = () => {
        if (this.state.coins > 0) {
            this.setState(
                {
                    coins: this.state.coins - 1,
                    results: [
                        this.reel1[Math.floor(Math.random() * this.reel1.length)],
                        this.reel2[Math.floor(Math.random() * this.reel2.length)],
                        this.reel3[Math.floor(Math.random() * this.reel3.length)],
                    ],
                },
                () => {
                    this.calculateResult();
                },
            );
        } else {
            this.setState({ coinsGained: "You don't have enought coins to play!" });
        }
    };

    calculateResult = () => {
        const cherrys = this.state.results.filter((obj: string) => obj === 'cherry').length;
        const apples = this.state.results.filter((obj: string) => obj === 'apple').length;
        const bananas = this.state.results.filter((obj: string) => obj === 'banana').length;
        const lemons = this.state.results.filter((obj: string) => obj === 'lemon').length;
        if (cherrys === 3) {
            this.setState({ coins: this.state.coins + 50, coinsGained: 50 });
        } else if (cherrys === 2) {
            this.setState({ coins: this.state.coins + 40, coinsGained: 40 });
        } else if (apples === 3) {
            this.setState({ coins: this.state.coins + 20, coinsGained: 20 });
        } else if (apples === 2) {
            this.setState({ coins: this.state.coins + 10, coinsGained: 10 });
        } else if (bananas === 3) {
            this.setState({ coins: this.state.coins + 15, coinsGained: 15 });
        } else if (bananas === 2) {
            this.setState({ coins: this.state.coins + 5, coinsGained: 5 });
        } else if (lemons === 3) {
            this.setState({ coins: this.state.coins + 3, coinsGained: 3 });
        } else {
            this.setState({ coinsGained: 0 });
        }
    };

    render() {
        return (
            <>
                <div className="exercise4__container">
                    <span className="exercise4__title">Exercise 4</span>
                    <div className="exercise4-reel__container">
                        <span>You have {this.state.coins} coins !</span>
                        <span className="exercise4__reel">value 1 : {this.state.results[0]}</span>
                        <span className="exercise4__reel">value 2 : {this.state.results[1]}</span>
                        <span className="exercise4__reel">value 3 : {this.state.results[2]}</span>
                        <button className="exercise4__button" onClick={this.getRandomValue}>
                            Click to Play
                        </button>

                        <span className="exercise4__result">Result: {this.state.coinsGained}</span>
                    </div>
                </div>
            </>
        );
    }
}
