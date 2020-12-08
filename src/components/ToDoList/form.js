import React from "react";
import axios from 'axios';
import './form.css'


const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed:false, id:Math.random()*1000}]);
    setInputText("");
    // once the submit handle starts, meaning that once the user presses enter or presses the add button
    // it will then send the inputText data via sendData.
    sendData(inputText);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  /* sendData() sends the data (the text input) to the backend. */
  function sendData(input) {
    const registered = {
      content: input
    }
    axios.post('http://localhost:4000/app/todos', registered)
    .then(res => console.log(JSON.stringify(res.data)))
    .catch(e => console.log(e))
  }


  return (
    <form>
      <input placeholder="Add task" value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"> </i>
      </button>
      <div onClick={statusHandler} className="select">
        <select name="todos" className="filter-todo">
          <option value="all"> All </option>
          <option value="completed"> Completed </option>
          <option value="uncompleted"> Uncompleted </option>
        </select>
      </div>
    </form>
  );
};

export default Form;
