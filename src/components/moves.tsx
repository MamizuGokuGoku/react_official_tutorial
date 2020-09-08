import React, { FC } from "react";

type MovesProps = {
  history: { squares: any[] }[];
  onClick: (i: number) => void;
};

const Moves: FC<MovesProps> = ({ history, onClick }) => (
  <ol>
    {history.map((step, move) => {
      const desc = move ? `Go to move # ${move}` : "Go to game start";
      return (
        <li key={move}>
          <button
            onClick={() => {
              onClick(move);
            }}
          >
            {desc}
          </button>
        </li>
      );
    })}
  </ol>
);

export default Moves;
