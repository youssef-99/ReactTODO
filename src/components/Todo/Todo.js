import { useState, useEffect } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";
import { TodoProvider } from "../../contexts/TodoContext";
import axios from "axios";

const Todo = () => {
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

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todo) => {
    console.log(todo);
    todos.splice(
      todos.indexOf((el) => el.id === todo.id),
      1
    );
    setTodos([...todos]);
  };

  const deleteTodos = (todos) => {
    todos.array.forEach((element) => {
      todos.splice(
        todos.indexOf((el) => el.id === element.id),
        1
      );
    });
    setTodos([...todos]);
  };

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, deleteTodos }}>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
};

export default Todo;
