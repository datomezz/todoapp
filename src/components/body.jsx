import React, {Fragment} from "react";
import {connect} from "react-redux";

import ListItem from "./list-item";
import TodoInput from "./todo-input";
import Filters from "./filters";

const Body = ({list, filter, todoRemoveAllCompleted}) => {
  const itemsLeft = list.filter(({isDone}) => isDone === false).length;

  const filterList = (filter, list) => {
    switch(filter) {
      case "ALL" : 
        return list;
      case "ACTIVE" : 
        return list.filter(({isDone}) => isDone !== true)
      case "COMPLETED" :
        return list.filter(({isDone}) => isDone !== false)
      default :
        return list;
    }
  }

  const filtredList = filterList(filter, list);

  return (
    <Fragment>
      <TodoInput />
      <ul className="list-group app-list__container">
        {
          filtredList.map((item, idx) => {
            return (
              <li key={idx} className="app-list__item">
                <ListItem item={item} />
              </li>
            )
          })
        }
        <div className="list-item__container justify-content-between">
          <span className="app-list-text">{itemsLeft} items left</span>
          <div className="d-sm-block d-none">
            <Filters />
          </div>
          <button onClick={todoRemoveAllCompleted} className="app-button__no-style app-list-text">Clear Completed</button>
        </div>
      </ul>
    </Fragment>
  )
}

const mapStateToProps = ({list, filter}) => {
  return {list, filter}
}

const mapDispatchToProps = dispatch => {
  return {
    todoRemoveAllCompleted : () => dispatch({type : "TODO_REMOVE_ALL_COMPLETED"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
