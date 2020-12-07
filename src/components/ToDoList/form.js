import React from "react";
import axios from 'axios';

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed:false, id:Math.random()*1000}]);
    setInputText("");
    sendData(inputText)
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  /* sendData() sends the data (the text input) to the backend. */
  function sendData(input) {
    axios.post('http://localhost:3000/api', JSON.stringify(input))
    .then(res => console.log(res.data))
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
