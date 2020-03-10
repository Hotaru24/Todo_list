import React, {useContext} from 'react';
import Todo from './Todo';
import CtxTodo from './CtxTodo';
import '../CSS/TodoList.css';

const Todolist = () => {

  const [todoList, setTodoList] = useContext(CtxTodo);

  return (
    <div className='list'>
      {todoList.map((todo, index) => {
        return  <Todo key={index} title={todo.title} describe={todo.describe} index={index}/>
      })}
    </div>
    
  )
}


export default Todolist;