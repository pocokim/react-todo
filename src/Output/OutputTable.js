import React, { useState } from "react";
import OutputRow from "./OutputRow";
import styled, { css } from "styled-components";
import { useStateValue } from "../state";

const Background = styled.div``;
const Table = styled.div`
  background: #dfdfdf;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled.ul`
  ${props =>
    !props.isOpened &&
    css`
      display: none;
    `}
`;

export default function OutputTable(props) {
  const [{ todos }] = useStateValue();
  const [isOpened, setIsOpened] = useState(true);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const todoList = todos.map((todo, idx) => {
    return <OutputRow idx={idx} key={todo.id} />;
  });

  console.log("OutputTable is render...");
  return (
    <Background>
      <Table>
        <h3>Todos</h3>
        <button onClick={handleClick}>toggle</button>
      </Table>
      <Ul isOpened={isOpened}>{todoList}</Ul>
    </Background>
  );
}
