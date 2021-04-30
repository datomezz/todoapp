import React, {useState} from "react";
import {connect} from "react-redux";

const TodoInput = ({addTodo}) => {
  const [value, setValue] = useState("");

  const submitNewTodo = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={submitNewTodo} className="list-item__container">
      <div className="list-item__head">
        <span className="list-item__circle"></span>
      </div>
      <div className="list-item__body">
        <input 
          className="app-input"
          type="text" 
          value={value} 
          placeholder="add todo..."
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="list-item__footer"></div>
    </form>
    
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo : (payload) => dispatch({type : "TODO_ADD", payload})
  }
}

export default connect(null, mapDispatchToProps)(TodoInput);
