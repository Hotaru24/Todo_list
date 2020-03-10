import React, {useState, useContext} from 'react';
import CtxTodo from './CtxTodo';
import '../CSS/FormTodo.css';

const FormTodo = () => {

  const [todoList, setTodoList] = useContext(CtxTodo);
  const [form, setForm] = useState({
    title: '',
    describe: ''
  });

  const addTodo = () => {
    return (
      setTodoList([...todoList, form])
    )
    
  };

  return(
    <div className="form" >
      <div className="card-body" >
        <form>
          <h2>Nouvelle quête</h2>
          <div className="form-group">
            <label htmlFor="exampleInputText">Title</label>
            <input 
              type="text" 
              className="form-control" 
              id="title" 
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputText">Description</label>
            <textarea 
              className="form-control" 
              id="exampleFormControlTextarea1" 
              rows="3"
              value={form.describe}
              onChange={(e) => setForm({ ...form, describe: e.target.value})}
            ></textarea>
          </div>
        </form>  
        <button href="#" className="btn btn-primary" onClick={addTodo}>Add</button>
      </div>
    </div>
  )
}


export default FormTodo;