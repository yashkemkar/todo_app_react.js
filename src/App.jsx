import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"

import { useState, useEffect } from 'react'

function App() {

  //We have to include some sample pre-loaded todos - these are stored in objects within an array. Where the first key-value pair is the actual todo and the second key-value pair is a status check.
  // const todos = [
  //   {input: 'Hello! Add your first todo!', complete: true},
  //   {input: 'Get the groceries!', complete: true},
  //   {input: 'Learn react', complete: true},
  //   {input: 'Fight for Middle Earth!', complete: false}
  // ]

  const [todos, setTodos] = useState([{ input: 'Hello! Add your first todo!', complete: true }])

  const [selectedTab, setSelectedTab] = useState('Open')

  // create an add function
  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }] // creates a completely new list, spreads the original array, adds the new todo onto it as an object with the complete key set to false.
    setTodos(newTodoList) //We have now updated the original list and deleted it.
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    //update/edit/modify
    let newTodoList = [...todos] //duplicate list of todos
    let completedTodo = todos[index] //accessing the specific todo that we are completing
    completedTodo['complete'] = true //modifying the status of it
    newTodoList[index] = completedTodo //updated that entry in the new list
    setTodos(newTodoList) //overrided the original to match the new list
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  // need to save data from previous use onto local storage. Stored within the JSON to be accessed later. Using object literal syntax and stringify the todo list and save it to our todo app.
  function handleSaveData(currTodos) {
    localStorage.setItem('todo_app', JSON.stringify({ todos: currTodos }))
  }

  // use effect to pull previously stored data when user reloads after the first time
  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo_app')) { return } //guard clause to prevent errors - if localstorage is not ready for us, then just exit out of this.
    let db = JSON.parse(localStorage.getItem('todo_app')) //access the data in the JSON
    setTodos(db.todos) //set todos to the stored value in the JSON
  }, [])

  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} selectedTab={selectedTab}/>
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
