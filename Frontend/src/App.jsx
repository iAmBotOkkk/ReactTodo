import { useState } from 'react'
import './App.css'
import { CreateTodo } from './Components/Todo'
import { RenderTodo } from './Components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  // fetch("http://localhost:3000/todos")
  // .then( async function(resolve){
  //   const json = await resolve.json();
  //   setTodos(json.todos)
  // });
  return (
    <div>
        <CreateTodo></CreateTodo>
        <RenderTodo todos = {todos}></RenderTodo>
    </div>
  )
}

 

export default App
