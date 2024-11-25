import { useState } from "react";

const TodoItem = (props) => {
  const [item, setItem] = useState(props.todo);

  const onChange = (e) => {
    setItem({ ...item, completed: !item.completed });
  };
  return (
    <>
      <div>
        <label htmlFor="task">{item.title}</label>
        <input
          id="task"
          type="checkbox"
          checked={item.completed}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default TodoItem;
