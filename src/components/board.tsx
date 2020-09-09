import React, { FC } from "react";
import styled from "styled-components";

type BoardProps = {
  squares: string[];
  onClick: (i: number) => void;
};

const Board: FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div>
      <BoardRow>
        <Square onClick={()=>{onClick(0)}}>{squares[0]}</Square>
        <Square onClick={()=>{onClick(1)}}>{squares[1]}</Square>
        <Square onClick={()=>{onClick(2)}}>{squares[2]}</Square>
      </BoardRow>
      <BoardRow>
        <Square onClick={()=>{onClick(3)}}>{squares[3]}</Square>
        <Square onClick={()=>{onClick(4)}}>{squares[4]}</Square>
        <Square onClick={()=>{onClick(5)}}>{squares[5]}</Square>
      </BoardRow>
      <BoardRow>
        <Square onClick={()=>{onClick(6)}}>{squares[6]}</Square>
        <Square onClick={()=>{onClick(7)}}>{squares[7]}</Square>
        <Square onClick={()=>{onClick(8)}}>{squares[8]}</Square>
      </BoardRow>
    </div>
  );
};

const BoardRow = styled.div`
  clear: both;
  content: "";
  display: table;
  &::after {
    clear: both;
    content: "";
    display: table;
  }
`;

const Square = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  &:focus {
    outline: none;
    background: #ddd;
  }
`;

export default Board;
