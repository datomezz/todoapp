const initialState = {
  darkTheme : false
}

const reducer = (state = initialState, action) => {
  
  switch(action.type) {
    case "TOGGLE_DARK_THEME" :
      return {
        ...state,
        darkTheme : !state.darkTheme
      }
    default : 
      return state;
  }
}

export default reducer;
