import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

const Filters = ({filter, filterChange}) => {
  const [filterButtons, setFilterButtons] = useState([
    {id : 1, label : "ALL", title : "All", isActive : true},
    {id : 2, label : "ACTIVE", title : "Active", isActive : false},
    {id : 3, label : "COMPLETED", title : "Completed", isActive : false}
  ]);

  const changeFilter = (index, payload) => {
    filterChange(payload);

    const idx = filterButtons.findIndex(({id}) => id === index);
    const newArr = filterButtons.map(item => {
      return {
        ...item,
        isActive : false
      }
    });

    const newItem = {
      ...newArr[idx],
      isActive : !newArr[idx].isActive
    }

    setFilterButtons([
      ...newArr.slice(0, idx), newItem, ...newArr.slice(idx + 1)
    ]);
  }

  return (
    <div className="filters">
      {
        filterButtons.map(({label, id, isActive, title}, idx) => {
          const activeClass = isActive ? "app-list-text--active" : "";
          return <button onClick={() => changeFilter(id, label)} className={`app-button__no-style app-list-text ${activeClass}`}>{title}</button>
        })
      }
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    filterChange : (payload) => dispatch({type : "FILTER_CHANGE", payload})
  }
}

const mapStateToProps = ({filter}) => {
  return {filter}
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
