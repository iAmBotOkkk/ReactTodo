import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodo] = useState([{
    title:"Studying React",
    description:"Learning the fundamentals of react",
    isCompleted: false
  },{
    title:"Studying Next Js",
    description:"Learning the fundamentals of Next",
    isCompleted: false
  }]); 

  return (
    <div>
      {todos.map(function(todo){
        return <Todo title ={todo.title} description = {todo.description} />

      })}
    </div>
  )
}

function Todo(state){
  return(
    <div>
      <h1>{state.title}</h1>
      <h2>{state.description}</h2>
    </div>
  )
}

export default App
