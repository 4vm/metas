const GoalList = ({list}) => {
  return (
    <div>
      <ul>
        {list.map(item =>(
          <li key={item.id}> 
            {item.title}
            <input type="checkbox" value={item.completed}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GoalList
