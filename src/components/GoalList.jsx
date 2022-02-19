const GoalList = ({list}) => {
  return (
    <div>
      <ul>
        {
          list.map(item => {
            return (
              <>
                <li>{item.title}</li>
                <input type="checkbox" value={item.completed}/>
              </>
            )
          })
        }
      </ul>
    </div>
  )
}

export default GoalList
