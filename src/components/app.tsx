import React, { useState } from "react";
import Board from "./board";
import Moves from "./moves";
import "../index.css";
import styled from "styled-components";

function calculateWinner(squares: string[]): {winner:string,line:number[]} | null {
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
      return {winner:squares[a],line:lines[i]};
    }
  }
  return null;
}

function getStatus(winOrLose: {winner:string,line:number[]} | null, xIsNext: boolean, stepNumber:number): string {
  if (winOrLose) {
    return `Winner: ${winOrLose.winner}`;
  }else if(stepNumber===9){
    return "Draw";
  }else {
    return `Next player: ${xIsNext ? "X" : "O"}`;
  }
}

const App = () => {
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
  const winOrLose = calculateWinner(current.squares);
  const status = getStatus(winOrLose, xIsNext, stepNumber);

  return (
    <Wrapper>
      <h1>tic-tac-toe</h1>
      <span>Referrer : </span>
      <Link href="https://ja.reactjs.org/tutorial/tutorial.html" 
         rel="noreferrer noopener" target="_blank" >https://ja.reactjs.org/tutorial/tutorial.html</Link> 
      <Game>
        <Status
          style={{color: winOrLose? winOrLose.winner==='X'? "red" : "blue" : "black",}}
          >{status}</Status>
        <Board squares={current.squares} onClick={(i) => handleClick(i) } line={winOrLose?.line? winOrLose.line : [10,10,10]} />
        <Moves history={history} onClick={jumpTo} ></Moves>
      </Game>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  width: 600px;
  margin: 0 auto; 
`;

const Link = styled.a`
  display:inline;
`;

const Game = styled.div`
  margin-top:50px;
`;

const Status = styled.div`
  font-size:20px;
  margin-bottom: 16px;
`;

export default App;
