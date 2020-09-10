import React, { FC } from "react";
import styled from "styled-components";
import {Button} from "@material-ui/core";

type MovesProps = {
  history: { squares: any[] }[];
  onClick: (i: number) => void;
};

const Moves: FC<MovesProps> = ({ history, onClick }) => (
  <Wrapper>
      {history.map((step, move) => {
        const desc = move ? `Go to move # ${move}` : "Go to game start";
        return (
          <MoveList key={move}>
            <StyledButton
              variant="outlined"
              onClick={() => {onClick(move);}} >
              {desc}
            </StyledButton>        
          </MoveList>
        );
      })}
  </Wrapper>
);

const Wrapper = styled.ul`
  margin-left: 40px;
  float:left;
  list-style:none;
`;

const MoveList = styled.li`
  margin-bottom:5px;
`

const StyledButton = styled(Button)`
  width:180px;
  height:30px;
  font: 14px "Century Gothic", Futura, sans-serif;
`;

export default Moves;
