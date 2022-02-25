import styled from "styled-components"

import { useState } from "react"

import Card from "./UI/Card"

const Form = styled.form`
  h1 {
    text-align: center;
  }
  
  label {
    display: block;
    font-weight: bold;

    opacity: 85%;

    margin-bottom: 0.8rem;
  }

  input {
    box-sizing: border-box;

    width: 100%;
    height: 2rem;

    margin-bottom: 0.5rem;
    padding: 0.5rem;

    border: 1px solid hsl(212, 45%, 70%);
    border-radius: 6px;
    
    outline: none;
    font: inherit;
  }

  button {
    height: 2rem;
    width: 6rem;

    margin-top: 0.8rem;
    padding: 0.25rem 1rem;

    border: 1px solid #4f005f;
    border-radius: 4px;
    background: hsl(212, 45%, 90%);
    
    cursor: pointer;

    &:hover {
      background: hsl(212, 45%, 30%);
      color: #FFFFFF;
    }
  }
`

const AddGoal = ({onAddGoal}) => {
  const [inputValue, setInputValue] = useState('')

  const goalChangeHandler = (event) => {
    setInputValue(event.target.value)
    //console.log(inputValue)
  }

  const addGoalHandler = (event) => {
    event.preventDefault()
    inputValue === '' ? alert('Digite uma tarefa') : onAddGoal(inputValue)
    setInputValue('')
    //console.log(inputValue)
  }
  
  return (
    <Card>
      <Form onSubmit={addGoalHandler}>
        <h1>Metas ✔</h1>
        <label >Digite uma tarefa: </label>
        <input type="text" value={inputValue} onChange={goalChangeHandler}/>
        <button type="submit">Adicionar</button>
      </Form>
    </Card>
  )
}

export default AddGoal