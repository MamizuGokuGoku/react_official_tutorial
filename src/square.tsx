import React, { FC } from "react";

type SquareProps = {
  value: String;
  onClick: () => void;
};

const Square: FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
