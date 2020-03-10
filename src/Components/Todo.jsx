import React, {useContext} from 'react';
import CtxTodo from './CtxTodo';

const Todo = (props) => {

  const [todoList, setTodoList] = useContext(CtxTodo);

  const deleteTodo = () => {
    let newTodos = [...todoList];
    newTodos.splice(props.index, 1);
    setTodoList(newTodos);
  }

  return (
    <div className="card" >
      <div className="card-body" >
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.describe}</p>
        <button href="#" className="btn btn-danger" onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  )
};


export default Todo;