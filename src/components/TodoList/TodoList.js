import { TodoConsumer } from "../../contexts/TodoContext";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  return (
    <TodoConsumer>
      {({ todos, deleteTodo, deleteTodos }) => {
        console.log(todos);
        return todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
        });
      }}
    </TodoConsumer>
  );
};

export default TodoList;
