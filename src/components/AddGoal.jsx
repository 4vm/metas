import { useState } from "react"

const AddGoal = ({onAddGoal}) => {
  const [goal, setGoal] = useState('')

  const goalChangeHandler = (e) => {
    setGoal(e.target.value)
    //console.log(goal)
  }

  const addGoalHandler = (e) => {
    e.preventDefault()
    onAddGoal(goal)
    //console.log(goal)
  }

  return (
    <form onSubmit={addGoalHandler}>
      <label htmlFor="">Digite uma tarefa: </label>
      <input type="text" onChange={goalChangeHandler}/>
      <button>Adicionar</button>
    </form>
  )
}

export default AddGoal