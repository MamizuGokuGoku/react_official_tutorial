import React, { FC } from "react";
import styled from "styled-components";

type BoardProps = {
  squares: string[];
  onClick: (i: number) => void;
  line:number[];
};

const Board: FC<BoardProps> = ({ squares, onClick, line}) => {
  const bgcolor = (i:number):string =>{
    if(line[0]===i || line[1]===i || line[2]===i) {
      return "yellow";
    }
    return "white";               
  }

  const color = (i:number) :string =>{
    if(squares[i]==="X"){
      return "red";
    }else if(squares[i]==="O"){
      return "blue";
    }else {
      return "black";
    }
  };

  const setStyle =(i:number):{}=>{
    const background:string = (line ? bgcolor(i):"white");
    const fontColor:string = color(i);
    
    return {background:background,color:fontColor}
  };

  return (
    <Wrapper>
      <BoardRow>
        <Square onClick={()=>{onClick(0)}} style={setStyle(0)}>{squares[0]}</Square>
        <Square onClick={()=>{onClick(1)}} style={setStyle(1)}>{squares[1]}</Square>
        <Square onClick={()=>{onClick(2)}} style={setStyle(2)}>{squares[2]}</Square>
      </BoardRow>
      <BoardRow>
        <Square onClick={()=>{onClick(3)}} style={setStyle(3)}>{squares[3]}</Square>
        <Square onClick={()=>{onClick(4)}} style={setStyle(4)}>{squares[4]}</Square>
        <Square onClick={()=>{onClick(5)}} style={setStyle(5)}>{squares[5]}</Square>
      </BoardRow>
      <BoardRow>
        <Square onClick={()=>{onClick(6)}} style={setStyle(6)}>{squares[6]}</Square>
        <Square onClick={()=>{onClick(7)}} style={setStyle(7)}>{squares[7]}</Square>
        <Square onClick={()=>{onClick(8)}} style={setStyle(8)}>{squares[8]}</Square>
      </BoardRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top:14px;
  float:left;
`;

const BoardRow = styled.div`
  margin:0 auto;
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
  border: 2px solid #999;
  float: left;
  font-size: 50px;
  font-weight: bold;
  line-height: 110px;
  height: 110px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 110px;
  &:focus {
    outline: none;
  }
`;

export default Board;
