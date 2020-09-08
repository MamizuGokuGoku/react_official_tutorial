import React, { useState } from "react";
import Board from "./board";
import Moves from "./moves";
import "../index.css";

function calculateWinner(squares: string[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function getStatus(winner: string | null, xIsNext: boolean): string {
  if (winner) {
    return `Winner: ${winner}`;
  } else {
    return `Next player: ${xIsNext ? "X" : "O"}`;
  }
}

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const nowgame = history.slice(0, stepNumber + 1);
    const current = nowgame[nowgame.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(nowgame.concat([{ squares: squares }]));
    setStepNumber(nowgame.length);
    setXIsNext((prevXIsNext) => !prevXIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const status = getStatus(winner, xIsNext);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>

        <Moves history={history} onClick={jumpTo} />
      </div>
    </div>
  );
};

export default Game;
