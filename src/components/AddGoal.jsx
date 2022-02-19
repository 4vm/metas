import { useState } from "react"

const AddGoal = ({onAddGoal}) => {
  const [cep, setCep] = useState('')

  const cepChangeHandler = (e) => {
    setCep(e.target.value)
    //console.log(cep)
  }

  const addCepHandler = (e) => {
    e.preventDefault()
    onAddGoal(cep)
    //console.log(cep)
  }

  return (
    <form onSubmit={addCepHandler}>
      <label htmlFor="">Digite uma tarefa: </label>
      <input type="text" onChange={cepChangeHandler}/>
      <button>Adicionar</button>
    </form>
  )
}

export default AddGoal