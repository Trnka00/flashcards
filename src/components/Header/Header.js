import React, { useState } from 'react';
import helpIcon from '../../img/help.svg';
import addIcon from '../../img/add.svg';
import darkModeIcon from '../../img/darkmode.svg';
import lightModeIcon from '../../img/lightmode.svg';

import headerCss from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    document.querySelector('html').classList.toggle('invert');
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <div className={headerCss.header}>
      <h1>Flashcard Master</h1>
      <div className={headerCss.btnContainer}>
        <Link to='/help'>
          <img className={headerCss.helpBtn} src={helpIcon} alt='help button' />
        </Link>

        <Link to='/add'>
          <img
            className={headerCss.addBtn}
            src={addIcon}
            alt='add package button'
          />
        </Link>

        <img
          src={theme === 'light' ? lightModeIcon : darkModeIcon}
          onClick={changeTheme}
          alt='dark mode'
        />
      </div>
    </div>
  );
};

export default Header;
