import React from 'react';
import Todo from './todo.js'
import './todoliststyle.css'


const TodoList = ({todos, setTodos, filteredTodos}) => {
  return (
    <div class="todo-container">
      <ul class="todo-list">
        {filteredTodos.map(todo => (
          <Todo text={todo.text} key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
