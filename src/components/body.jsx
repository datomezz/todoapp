import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TODO_REMOVE_ALL_COMPLETED} from "../actions";

import ListItem from "./list-item";
import TodoInput from "./todo-input";
import Filters from "./filters";

const Spinner = () => {
  return <h1>Spinner</h1>
}

const Error = () => {
  return <h1>Error</h1>
}

const Body = ({fetchList, loading, error}) => {
  const {list, filter} = useSelector(({list, filter}) => ({list, filter}));
  const dispatch = useDispatch();

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

  if(loading) {
    return <Spinner />
  }

  if(error) {
    return <Error />
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
        <div className="list-item__container justify-content-between border-0">
          <span className="app-list-text">{itemsLeft} items left</span>
          <div className="d-sm-block d-none">
            <Filters />
          </div>
          <button onClick={() => dispatch(TODO_REMOVE_ALL_COMPLETED())} className="app-button__no-style app-list-text">Clear Completed</button>
        </div>
      </ul>
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    todoRemoveAllCompleted : () => dispatch(TODO_REMOVE_ALL_COMPLETED())
  }
}

export default Body;
