import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {TODO_ADD} from "../actions";

const TodoInput = () => {
  const {list} = useSelector(({list}) => ({list}));
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const submitNewTodo = (e, value) => {
    e.preventDefault();
    dispatch(TODO_ADD(value));
    setValue("");
  }

  return (
    <form onSubmit={(e) => submitNewTodo(e, value)} className="list-item__container">
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

export default TodoInput;
