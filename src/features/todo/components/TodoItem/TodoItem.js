import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, editTodo } from "../../state";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    if (isEditing && newTitle.trim()) {
      dispatch(editTodo({ id: todo.id, title: newTitle }));
    }
    setIsEditing(!isEditing);
  };
  return (
    <div key={todo.id}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleEdit}>Submit</button>
        </>
      ) : (
        <>
          <button onClick={(_) => dispatch(deleteTodo(todo.id))}>Delete</button>
          <button
            onClick={(_) => {
              handleEdit();
            }}
          >
            Edit
          </button>
          <label htmlFor={todo.id}>{todo.title}</label>
          <input
            id={todo.id}
            type="checkbox"
            checked={todo.completed}
            onChange={() => {}}
          />
          <Link to={`/item/${todo.id}/${todo.title}`}>Go To Details</Link>
        </>
      )}
    </div>
  );
};

export default TodoItem;

// global state (cake)
// Reducers (customer, cake provider)
// store(bakery shop)
