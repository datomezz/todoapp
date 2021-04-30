import React, {useState} from "react";
import {connect} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

const ListItem = ({item, changeStatusListItem, removeListItem}) => {
  const {title, id, isDone} = item;
  const [read, setRead] = useState(false);
  const textClass = read ? "list-item__title--full" : "";

  const circleClass = isDone ? "list-item__circle--active" : "";
  const titleClass = isDone ? "list-item__title--active" : "";

  return (
    <div className="list-item__container">
      <div className="list-item__head">
        <button onClick={() => changeStatusListItem(id)} className={`app-button__no-style list-item__circle ${circleClass}`}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
      <div className="list-item__body">
        <p onDoubleClick={() => setRead(!read)} className={`list-item__title ${textClass} ${titleClass}`}>{title}</p>
      </div>
      <div className="list-item__footer">
        <button onClick={() => removeListItem(id)} className="app-button__no-style app-text">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    removeListItem : (payload) => dispatch({type : "REMOVE_LIST_ITEM", payload}),
    changeStatusListItem : (payload) => dispatch({type : "CHANGE_STATUS_LIST_ITEM", payload})
  }
}

export default connect(null, mapDispatchToProps)(ListItem);
