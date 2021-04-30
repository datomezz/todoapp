import React, {useEffect} from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

const Header = ({darkTheme, toggleDarkTheme}) => {

  useEffect(() => {
    document.body.classList.toggle("theme-dark")
  }, [darkTheme])

  const toggleIcon = darkTheme ? faMoon : faSun;

  return (
    <div className="app-header">
      <h2 className="app-header__title font-weight-bold">TODO</h2>
        <button className="app-button__no-style app-text" onClick={() => toggleDarkTheme()}>
          <FontAwesomeIcon icon={toggleIcon} />
        </button>
    </div>
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
