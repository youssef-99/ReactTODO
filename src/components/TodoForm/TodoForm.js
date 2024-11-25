import { useState } from "react";
import { TodoConsumer } from "../../contexts/TodoContext";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e, addTodo) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    addTodo(newTodo);
    setTitle("");
  };

  return (
    <TodoConsumer>
      {({ addTodo }) => (
        <form onSubmit={(e) => handleSubmit(e, addTodo)}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a task"
          />
          <button type="submit">Add Todo</button>
        </form>
      )}
    </TodoConsumer>
  );
};

export default TodoForm;
