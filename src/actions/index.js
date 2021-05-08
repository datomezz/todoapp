const TOGGLE_DARK_THEME = () => ({type : "TOGGLE_DARK_THEME"});
const REMOVE_LIST_ITEM = (payload) => ({type : "REMOVE_LIST_ITEM", payload});
const CHANGE_STATUS_LIST_ITEM = (payload) => ({type : "CHANGE_STATUS_LIST_ITEM", payload});
const TODO_ADD = (payload) => ({type : "TODO_ADD", payload});
const TODO_REMOVE_ALL_COMPLETED = () => ({type : "TODO_REMOVE_ALL_COMPLETED"});
const FILTER_CHANGE = (payload) => ({type : "FILTER_CHANGE", payload});
const UPDATE_LIST = (payload) => ({type : "UPDATE_LIST", payload});

const FETCH_LIST_REQUEST = () => ({type : "FETCH_LIST_REQUEST"});
const FETCH_LIST_SUCCESS = (payload) => ({type : "FETCH_LIST_SUCCESS", payload});
const FETCH_LIST_FAILURE = (payload) => ({type : "FETCH_LIST_FAILURE", payload});

export {
  TOGGLE_DARK_THEME,
  REMOVE_LIST_ITEM,
  CHANGE_STATUS_LIST_ITEM,
  TODO_ADD,
  TODO_REMOVE_ALL_COMPLETED,
  FILTER_CHANGE,
  UPDATE_LIST,

  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE
}
