import Card from "./UI/Card"

const GoalList = ({list}) => {
  return (
    <Card>
      <ul>
        {list.map(item =>(
          <li key={item.id}> 
            {item.title}
            <input type="checkbox" value={item.completed}/>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default GoalList
