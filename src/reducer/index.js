const initialState = {
  darkTheme : false,
  list : [
    {id : 0, title : "Todo App", isDone : false}
  ],
  filter : "ALL",
  loading : true,
  error : false
}

const fetchListFailure = (state, payload) => {
  console.log("FAILURE", payload);
  return {
    ...state,
    loading : false,
    error : true
  }
}

const fetchListSuccess = (state, payload) => {
  console.log("success", payload);
  return {
    ...state,
    loading : false,
    error : false,
    list : payload
  }
}

const fetchListRequest = (state) => {
  return {
    ...state,
    loading : true,
    error : false
  }
}

const updateList = (state, payload) => {
  return {
    ...state,
    list : payload
  }
}

const filterChange = (state, payload) => {
  return {
    ...state,
    filter : payload
  }
}

const todoRemoveAllCompleted = (state) => {
  const {list} = state;

  const filtredList = list.filter(({isDone}) => isDone !== true);

  return {
    ...state,
    list : filtredList
  }
}

const todoAdd = (state, payload) => {
  const {list} = state;

  const newItem = {
    id : list.length + 1,
    title : payload,
    isDone : false
  }

  return {
    ...state,
    list : [
      ...state.list,
      newItem
    ]
  }
}

const changeStatusListItem = (state, payload) => {
  const {list} = state;
  const idx = list.findIndex(({id}) => id === payload);

  const newItem = {
    ...list[idx],
    isDone : !list[idx].isDone
  }

  const newList = [
    ...list.slice(0, idx),
    newItem,
    ...list.slice(idx + 1)
  ];

  return {
    ...state,
    list : newList
  }
}

const removeListItem = (state, payload) => {
  const {list} = state;

  const idx = list.findIndex(({id}) => id === payload);

  const newList = [
    ...list.slice(0, idx),
    ...list.slice(idx + 1)
  ];

  return {
    ...state,
    list : newList
  }
}

const reducer = (state = initialState, action) => {
  
  switch(action.type) {
    case "TOGGLE_DARK_THEME" :
      return {
        ...state,
        darkTheme : !state.darkTheme
      }
    case "REMOVE_LIST_ITEM" : 
      return removeListItem(state, action.payload);
    case "CHANGE_STATUS_LIST_ITEM" :
      return changeStatusListItem(state, action.payload);
    case "TODO_ADD" :
      return todoAdd(state, action.payload)
    case "TODO_REMOVE_ALL_COMPLETED" :
      return todoRemoveAllCompleted(state);
    case "FILTER_CHANGE" : 
      return filterChange(state, action.payload);
    case "UPDATE_LIST" :
      return updateList(state, action.payload);
    case "FETCH_LIST_REQUEST" : 
      return fetchListRequest(state);
    case "FETCH_LIST_SUCCESS" :
      return fetchListSuccess(state, action.payload);
    case "FETCH_LIST_FAILURE" : 
      return fetchListFailure(state, action.payload);
    default : 
      return state;
  }
}

export default reducer;
