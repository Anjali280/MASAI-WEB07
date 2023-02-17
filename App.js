import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./redux/action";
import "./styles.css";

function App() {
  const [todo, setTodo] = useState({
    todo: "",
  });

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo.todo));
    console.log(todos);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    console.log(todos);
  };

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <div className="App">
        <form action="" onSubmit={handleTodo}>
          <input name="todo" type="text" onChange={handleChange} />
          <button type="submit">Add todo</button>
        </form>
        {todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.text}</p>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
