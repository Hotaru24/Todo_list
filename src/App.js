import React from 'react';
import './App.css';
import FormTodo from './Components/FormTodo';
import Todolist from './Components/TodoList';



//20.40min  = https://www.youtube.com/watch?v=P_DgMT8_1kI&list=PLVBvhDBS_eGUZQ6xTmcx-1m5YHuCyIHBA&index=12

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Tableau des quêtes</h1>
      <Todolist />
      <FormTodo/>
    </div>
  );
}

export default App;
