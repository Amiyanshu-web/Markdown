import React, { useContext } from 'react';
import { DARK } from './constants/constants';
import { ThemeContext } from './context/themeContext';
import dayNightIcon from './assets/day-and-night.svg';

const Header = () => {
  const mode = useContext(ThemeContext);
  const themeClass = mode.theme === DARK ? mode.theme : null;

  return (
    <div className={`header ${themeClass}`}>
      <h1>Markdown</h1>
      <img
        className={`toggleTheme ${themeClass}`}
        src={dayNightIcon}
        alt='Theme-Toggle-Button'
        onClick={mode.toggleTheme}></img>
    </div>
  );
};

export default Header;
