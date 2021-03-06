import React, { useEffect, useState } from 'react'

function TodoApp() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [todoEditing, setTodoEditing] = useState(null)
  const [editingText, setEditingText] = useState('')

  useEffect(() => {
    const loadedTodos = JSON.parse(localStorage.getItem('todos'))

    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  }, [])

  useEffect(() => {
    const json = JSON.stringify(todos)
    localStorage.setItem('todos', json)
  }, [todos])

  function handleSubmit(e) {
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    }
    // localStorage.setTodo("todos", JSON.stringify(todos));
    setTodos([...todos].concat(newTodo))
    setTodo('')
  }

  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id)
    // localStorage.setTodo('todos', JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
  }

  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    // localStorage.setTodos('todos', JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
  }

  function editTodo(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText
      }
      return todo
    })
    // localStorage.setTodos('todos', JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
    setTodoEditing(null)
    setEditingText('')
  }

  return (
    <div className="TodoApp">
      <h1>Todo app</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button type="submit">Add item</button>
      </form>

      {todos.map((todo) => (
        <div key={todo.id}>
          {todoEditing === todo.id ? (
            <input type="text" onChange={(e) => setEditingText(e.target.value)} value={editingText} />
          ) : (
            <div>{todo.text}</div>
          )}

          <button onClick={() => deleteTodo(todo.id)}>Delete item</button>

          <input type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.completed} />

          {todoEditing === todo.id ? (
            <button onClick={() => editTodo(todo.id)}>Submit edit</button>
          ) : (
            <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
          )}
        </div>
      ))}
    </div>
  )
}

export default TodoApp
