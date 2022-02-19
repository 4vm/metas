import AddGoal from './components/AddGoal'
import GoalList from './components/GoalList'

import './App.css'
import { useState } from 'react'

function App() {
  const [goal, setGoal] = useState([])

  const addGoalHandler = (goalTitle, completed) => {
    setGoal((prevGoalList) => {
      return [...prevGoalList, { title: goalTitle, completed: completed}]
    })
  }

  return (
    <div>
      <h1>Metas ✔</h1>
      <AddGoal onAddGoal={addGoalHandler}/>
      <GoalList list={goal}/>
    </div>
  )
}

export default App
