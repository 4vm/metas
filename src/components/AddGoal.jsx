import { useState } from "react"

const AddGoal = ({onAddGoal}) => {
  const [inputValue, setInputValue] = useState('')

  const goalChangeHandler = (event) => {
    setInputValue(event.target.value)
    //console.log(inputValue)
  }

  const addGoalHandler = (event) => {
    event.preventDefault()
    onAddGoal(inputValue)
    setInputValue('')
    //console.log(inputValue)
  }
  
  return (
    <form onSubmit={addGoalHandler}>
      <label >Digite uma tarefa: </label>
      <input type="text" value={inputValue} onChange={goalChangeHandler}/>
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default AddGoal