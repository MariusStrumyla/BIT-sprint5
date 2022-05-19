import React from 'react'

function TodoApp() {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    }

    setTodos([...todos].concat(newTodo))
    setTodo("")
  }

  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div className="TodoApp">
        <h1>Todo app</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button type="submit">Add item</button>
      </form>
      {todos.map((todo) => <div key={todo.id}>
          <div>{todo.text}</div>

          <button onClick={() => deleteTodo(todo.id)}>Delete item</button>

      </div>)}
    </div>
  );
}

export default TodoApp