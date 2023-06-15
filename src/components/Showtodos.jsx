import React from 'react';
import TodoItem from './TodoItem';

const Display = ({ todoProps, setTodos, delTodo }) => (
  <ul className="listDisplay">
    {todoProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        setTodos={setTodos}
        delTodo={delTodo}
      />
    ))}
  </ul>
);

export default Display;
