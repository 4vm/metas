import { useState } from 'react'

import AddGoal from './components/AddGoal'
import GoalList from './components/GoalList'

import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  place-items: center;

  min-height: 100vh;
  background-color: hsl(212, 45%, 89%);

  p {
    font-weight: 700;
  }
`

function App() {
  const [goal, setGoal] = useState([])

  const addGoalHandler = (goalTitle, completed) => {
    setGoal((prevGoalList) => {
      return [...prevGoalList, { title: goalTitle, completed: completed, id: Math.random()}]
    })
  }

  return (
    <Container>
      <AddGoal onAddGoal={addGoalHandler}/>
      {goal.length === 0 ? <p>Sem metas.</p> : <GoalList list={goal}/>}
    </Container>
  )
}

export default App
