import axios from "axios";
import { useState, useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../../contexts/TodoContext";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data.slice(0, 10));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getTodos(), []);

  const isCompeleted = (completed) => {
    if (completed) return "checked";
    return "";
  };

  const onChange = (e) => {};
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <input
            type="checkbox"
            checked={isCompeleted(todo.completed)}
            onChange={onChange}
          />
        </div>
      ))}
    </>
  );
};

export default TodoList;
