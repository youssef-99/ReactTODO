import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { TodoProvider } from "./contexts/TodoContext";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const getTodos = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getTodos(), []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="App">
      <TodoProvider value={{ todos, addTodo }}>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
