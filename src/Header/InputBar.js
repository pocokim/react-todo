import React from "react";
import styled from "styled-components";
import nextId from "react-id-generator";
import { useStateValue } from "../state";

const Form = styled.form`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 2rem;
`;

export default function InputBar(props) {
  const id = nextId();
  const [{ todos,newTodo }, dispatch] = useStateValue();
  

  const handleChangeInput = ({ target: { value } }) => {
    dispatch({
      type: "changeInput",
      newTodo: value
    });
  };

  const handleAddtodo = e => {
    e.preventDefault();
    dispatch({
      type: "add",
      title: newTodo,
      id
    });
  };
  return (
    <Form>
      <label>Enter todo : </label>
      <input value={newTodo} onChange={handleChangeInput} />
      <button onClick={handleAddtodo}>submit</button>
    </Form>
  );
}
