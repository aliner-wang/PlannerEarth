import React from 'react';
import './todo.css'
/* This file handles all todo task objects. 
text: text portion of todo object
todo: 
todos: 
setTodos*/





const Todo = ({text, todo, todos, setTodos}) => {

  //deletes task on list
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  };


  // checks off thing on list
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


  const Edit = (text) => {
    setTodos(todos.map(item => 
      item.text = text
    ))
  }


  //returns updated todo list with elements
  return (
    <div className = "todo">
      <button className="important-btn">
        <i className="fas fa-certificate"> </i>
      </button>
      <li className = {`todo-item ${todo.completed ? "completed" : ""}`}> {text} </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"> </i>
      </button>
      <button onClick={Edit} className="edit-btn">
        <i className="fas fa-edit"> </i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"> </i>
      </button>

    </div>
  );
};

export default Todo;



