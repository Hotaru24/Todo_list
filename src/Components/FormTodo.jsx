import React from 'react';


const FormTodo = () => {

  return(
    <div className="card" >
      <div className="card-body" >
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>  
        <a href="#" className="btn btn-primary">Add</a>
      </div>
    </div>
  )
}


export default FormTodo;