import React, { FC } from "react";
import Square, { SquareProps } from "./square";

type BoardProps = {
  squares: string[];
  onClick: (i: number) => void;
};

const Board: FC<BoardProps> = ({ squares, onClick = () => undefined }) => {
  const getSquareProps = (i: number): SquareProps => ({
    value: squares[i],
    onClick: () => {
      onClick(i);
    },
  });
  return (
    <div>
      <div className="board-row">
        <Square {...getSquareProps(0)}></Square>
        <Square {...getSquareProps(1)}></Square>
        <Square {...getSquareProps(2)}></Square>
      </div>
      <div className="board-row">
        <Square {...getSquareProps(3)}></Square>
        <Square {...getSquareProps(4)}></Square>
        <Square {...getSquareProps(5)}></Square>
      </div>
      <div className="board-row">
        <Square {...getSquareProps(6)}></Square>
        <Square {...getSquareProps(7)}></Square>
        <Square {...getSquareProps(8)}></Square>
      </div>
    </div>
  );
};

export default Board;
