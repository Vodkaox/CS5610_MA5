import React from "react";
import "./Board.css";
import Square from "./Square";
import SquareContext from "./SquareContext";

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(4).fill(1),
        };

        this.colorChanger = this.colorChanger.bind(this);
    }

    colorChanger(i) {
        var theSquare = document.getElementById(i);
        const squares = this.state.squares.slice();

        if (this.state.squares[i] == 1){
            theSquare.style.backgroundColor = 'black';
            squares[i] = 0;
            this.setState({
                squares: squares
            });
        }

        if (this.state.squares[i] == 0){
            theSquare.style.backgroundColor = 'white';
            squares[i] = 1;
            this.setState({
                squares: squares
            });
        }
    }

    renderSquare(i){
        return (
            <SquareContext.Consumer>
                {({ squares, colorChanger }) => (
                    <Square
                        value={squares[i]}
                        onClick={() => colorChanger(i)}
                        squareId={i}
                    />
                )}
            </SquareContext.Consumer>
        );
    }

    render(){
        const counter = 'Counter: ' + (4 - this.state.squares[0] - 
        this.state.squares[1] - this.state.squares[2] 
        - this.state.squares[3]);

        return (
            <SquareContext.Provider value={{ squares: this.state.squares, colorChanger: this.colorChanger }}>
                <div>
                    <div>{counter}</div>
                    <div>
                        {this.renderSquare(0)} {this.renderSquare(1)}
                    </div>
                    <div>
                        {this.renderSquare(2)} {this.renderSquare(3)}
                    </div>
                </div>
            </SquareContext.Provider>
        )
    }
}

export default Board;
