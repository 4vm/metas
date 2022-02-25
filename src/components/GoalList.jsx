import styled from "styled-components"

import Card from "./UI/Card"

const List = styled.ul`
  display: flex;
  justify-content: space-between;

  padding: 1rem;

  border: 1px solid hsl(212, 45%, 70%);
  border-radius: 8px;
  
  list-style-type: none;
  word-break: break-all;
`

const GoalList = ({list}) => {
  return (
    <Card >
      {list.map(item => (
      <List key={item.id}>
        <li >{item.title}</li>
        <input type="checkbox" value={item.completed} />
        </List>
      ))}
    </Card>
  )
}

export default GoalList