import { useState } from "react";
import { TodoConsumer } from "../../contexts/TodoContext";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e, addTodo) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    addTodo(newTodo);
    setTitle("");
  };
  return (
    <TodoConsumer>
      {({ addTodo }) => {
        return (
          <form onSubmit={(e) => handleSubmit(e, addTodo)}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add Todo</button>
          </form>
        );
      }}
    </TodoConsumer>
  );
};

export default TodoForm;
