import React, {useEffect} from "react";
import {connect} from "react-redux";

const Header = ({darkTheme, toggleDarkTheme}) => {

  useEffect(() => {
    document.body.classList.toggle("theme-dark")
  }, [darkTheme])

  return (
    <button onClick={() => toggleDarkTheme()}>Switch</button>
  )
}

const mapStateToProps = ({darkTheme}) => {
  return {darkTheme}
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDarkTheme : () => dispatch({type : "TOGGLE_DARK_THEME"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
