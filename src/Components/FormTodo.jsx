import React, {useState} from 'react';
import '../CSS/FormTodo.css';

const FormTodo = () => {

  const [form, setForm] = useState({
    title: '',
    describe: ''
  });

  return(
    <div className="form" >
      <div className="card-body" >
        <form>
          <h2>Nouvelle quête</h2>
          <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input type="text" class="form-control" id="title" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>  
        <button href="#" className="btn btn-primary">Add</button>
      </div>
    </div>
  )
}


export default FormTodo;