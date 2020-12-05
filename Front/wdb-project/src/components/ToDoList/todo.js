import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  };

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
      })
    );
  };

  return (
    <div className = "todo">
      <button className="important-btn">
        <i className="fas fa-certificate"> </i>
      </button>
      <li className = "dueDate"> 12/31 5:00PM </li>
      <li className = {`todo-item ${todo.completed ? "completed" : ""}`}> {text} </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"> </i>
      </button>
      <button className="edit-btn">
        <i className="fas fa-edit"> </i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"> </i>
      </button>

    </div>
  );
};

export default Todo;
