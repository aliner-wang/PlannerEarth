import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Form from './components/ToDoList/form.js';
import TodoList from './components/ToDoList/todolist.js'


//React DF
function App() {
<<<<<<< HEAD
    //Input text = what the person types into the bar for their task
    const [inputText, setInputText] = useState("");
    //List of all todos
    const [todos, setTodos] = useState([]);
    //Filter status - if they want to see all, completed, uncompleted, important tasks
    const [status, setStatus] = useState("all");
    //List of filtered todos - needed another list bc user might click all again and want original list saved as well
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        filterHandler();
    }, [todos, status]);

    //Filter out what the user wants to see based on category
    const filterHandler = () => {
        switch (status) {
            case ("completed"):
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case ("uncompleted"):
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos)
                break;
        }
    };

    return ( <
        div className = "App" >
        <
        Router >
        <
        Navbar / >
        <
        Switch >
        <
        Route path = '/' / >
        <
        /Switch> <
        /Router>

        <
        header >
        <
        h1 > My To - Do List < /h1> <
        /header> <
        Form todos = { todos }
        setTodos = { setTodos }
        setInputText = { setInputText }
        inputText = { inputText }
        status = { status }
        setStatus = { setStatus }
        />

        <
        TodoList setTodos = { setTodos }
        todos = { todos }
        filteredTodos = { filteredTodos }
        /> <
        /div>
    );
=======
  //Input text = what the person types into the bar for their task
  const [inputText, setInputText] = useState("");
  //List of all todos
  const [todos, setTodos] = useState([]);
  //Filter status - if they want to see all, completed, uncompleted, important tasks
  const [status, setStatus] = useState("all");
  //List of filtered todos - needed another list bc user might click all again and want original list saved as well
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  

  //Filter out what the user wants to see based on category
  const filterHandler = () => {
    switch(status) {
      case("completed"):
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case("uncompleted"):
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
  
    <header>
      <h1> My To-Do List</h1>
    </header>
    <Form
      todos={todos} setTodos={setTodos} setInputText = {setInputText}
      inputText={inputText} status={status} setStatus={setStatus}/>

      <TodoList setTodos={setTodos} todos={todos} filteredTodos = {filteredTodos}/>
    </div>
  );
>>>>>>> 296162ecce3f6c906a7e8bdfc3dfdd2ddb53d238
}




// Express connecting to Data Base and grabbing the goods. 
export default App;