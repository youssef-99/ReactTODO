import { useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
