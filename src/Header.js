import React, { useContext } from 'react';
import { DARK } from './constants';
import { ThemeContext } from './context/themeContext';
import dayNightToggleIcon from './images/day_and_night.svg;'

const Header = () => {
  const mode = useContext(ThemeContext);
  const themeClass = mode.theme === DARK ? mode.theme : null;

  return (
    <div className={`header ${themeClass}`}>
      <h1>Markdown</h1>
      <img
        className={`toggleTheme ${themeClass}`}
        src={dayNightToggleIcon}
        alt='Theme-Toggle-Button'
        onClick={mode.toggleTheme}></img>
    </div>
  );
};

export default Header;