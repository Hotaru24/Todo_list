import React, {useState} from 'react';
import './CSS/App.css';
import CtxTodo from './Components/CtxTodo';
import FormTodo from './Components/FormTodo';
import Todolist from './Components/TodoList';

const App = () => {

const [todoList, setTodoList] = useState([]);

  return (
    <div className="container">
      <h1 className="title">Tableau des quêtes</h1>
      <CtxTodo.Provider value={[todoList, setTodoList]}>
        <Todolist />
        <FormTodo/>
      </CtxTodo.Provider>

    </div>
  );
}

export default App;
