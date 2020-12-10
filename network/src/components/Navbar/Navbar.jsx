import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <NavLink to="/profile" className={style.item} activeClassName={style.active}>Profile</NavLink>
      <NavLink to="/dialogs" className={style.item} activeClassName={style.active}>Messages</NavLink>
      <NavLink to="/news" className={style.item} activeClassName={style.active}>News</NavLink>
      <NavLink to="/music" className={style.item} activeClassName={style.active}>Music</NavLink>
      <NavLink to="/settings" className={style.item} activeClassName={style.active}>Settings</NavLink>
    </nav>
)
}

export default Navbar;