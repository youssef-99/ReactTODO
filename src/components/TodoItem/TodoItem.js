import { useState } from "react";

const TodoItem = (props) => {
  const [todo, setTodo] = useState(props.todo);

  const onChange = (e) => {
    setTodo({ ...todo, completed: !todo.completed });
  };
  return (
    <div key={todo.id}>
      <button onClick={(_) => props.deleteTodo(props.todo)}>Delete</button>
      <label htmlFor={props.todo.id}>{props.todo.title}</label>
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.completed}
        onChange={onChange}
      />
    </div>
  );
};

export default TodoItem;
