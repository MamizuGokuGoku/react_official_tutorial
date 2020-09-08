import React, { FC } from "react";

export type SquareProps = {
  value: String;
  onClick: () => void;
};

const Square: FC<SquareProps> = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

export default Square;
