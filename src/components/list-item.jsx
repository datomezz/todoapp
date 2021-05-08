import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {CHANGE_STATUS_LIST_ITEM, REMOVE_LIST_ITEM} from "../actions";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

const ListItem = ({item, changeStatusListItem, removeListItem}) => {
  const dispatch = useDispatch();

  const {title, id, isDone} = item;
  const [read, setRead] = useState(false);
  const textClass = read ? "list-item__title--full" : "";

  const circleClass = isDone ? "list-item__circle--active" : "";
  const titleClass = isDone ? "list-item__title--active" : "";

  return (
    <div className="list-item__container">
      <div className="list-item__head">
        <button onClick={() => dispatch(CHANGE_STATUS_LIST_ITEM(id))} className={`app-button__no-style list-item__circle ${circleClass}`}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
      <div className="list-item__body">
        <p onDoubleClick={() => setRead(!read)} className={`list-item__title ${textClass} ${titleClass}`}>{title}</p>
      </div>
      <div className="list-item__footer">
        <button onClick={() => dispatch(REMOVE_LIST_ITEM(id))} className="app-button__no-style app-text">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  )
}

export default ListItem;
