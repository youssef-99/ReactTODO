import { TodoConsumer } from "../../contexts/TodoContext";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  return (
    <TodoConsumer>
      {({ todos }) => (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </TodoConsumer>
  );
};

export default TodoList;
