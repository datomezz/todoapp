import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {TOGGLE_DARK_THEME} from "../actions";

const Header = () => {

  const {darkTheme} = useSelector(({darkTheme}) => ({darkTheme}));
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.toggle("theme-dark")
  }, [darkTheme])

  const toggleIcon = darkTheme ? faMoon : faSun;

  return (
    <div className="app-header">
      <h2 className="app-header__title font-weight-bold">TODO</h2>
        <button className="app-button__no-style app-text" onClick={() => dispatch(TOGGLE_DARK_THEME())}>
          <FontAwesomeIcon icon={toggleIcon} />
        </button>
    </div>
  )
}

export default Header;
