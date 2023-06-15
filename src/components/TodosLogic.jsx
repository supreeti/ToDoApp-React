import React, { useState } from 'react';
import Addtodo from './AddTodos';
import Display from './Showtodos';

const TodosLogic = () => {
  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  );

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  return (
    <div>
      <Addtodo />
      <Display todoProps={todos} setTodos={setTodos} delTodo={delTodo} />
    </div>
  );
};
export default TodosLogic;
