import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './UI/Button';

const Wrapper = styled.div`
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom:10px;
    padding: 25px 5px;
    border-radius: 30px;
    align-items: center;
    z-index: 1;
    margin-bottom: 20px;
  `;

const BtnGroup = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-between;
  width: 95%;
  z-index: 2;
`;

function TodoCreator({ handleFind }) {
  const [todoText, setTodoText] = useState('');

  console.log("%c Render Search","color: aqua")

  function handleChange(evt) {
    setTodoText(evt.target.value);
    handleFind(evt.target.value);
  }


  return (
    <Wrapper>
      <label htmlFor="todo">Search TODO:</label>
      <BtnGroup>
        <input
          onChange={handleChange}
          value={todoText}
          placeholder="Búsqueda..."
        />
        <Button handleClick={()=>handleFind(todoText)}>Save</Button>
      </BtnGroup>
    </Wrapper>
  )
}

export default TodoCreator;
