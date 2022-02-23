import Card from "./UI/Card"

const GoalList = ({list}) => {
  return (
    <div>
      {list.map(item =>(
      <Card>
        <li key={item.id}>{item.title}</li>
        <input type="checkbox" value={item.completed}/>
      </Card>
      ))}
    </div>
  )
}

export default GoalList
