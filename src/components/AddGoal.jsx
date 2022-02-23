import { useState } from "react"

import Card from "./UI/Card"

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
      <form onSubmit={addGoalHandler}>
        <h1>Metas ✔</h1>
        <label >Digite uma tarefa: </label>
        <input type="text" value={inputValue} onChange={goalChangeHandler}/>
        <button type="submit">Adicionar</button>
      </form>
    </Card>
  )
}

export default AddGoal