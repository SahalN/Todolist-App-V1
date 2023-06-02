/** @format */

import { TodoItem } from "./TodoItem";

export function Todolist({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className='list'>
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={todo.toggleTodo}
            deleteTodo={todo.deleteTodo}
          />
        );
      })}
    </ul>
  );
}
