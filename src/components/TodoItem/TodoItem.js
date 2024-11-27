import { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to={`${item.id}`}>Read More</Link>
      </div>
    </>
  );
};

export default TodoItem;
