import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = (props) => {

  const photoElements = props.state.sidebar.map( a => {
    return (
      <div>
        <div className={style.avatar}>
          <img src={a.avatar} alt="ava" width="60px"/>
        </div>
        <span className={style.name}>{a.name}</span>
      </div>
      
      
    )
  } );

  return (
    <nav className={style.nav}>
      <div>
        <NavLink to="/profile" className={style.item} activeClassName={style.active}>Profile</NavLink>
        <NavLink to="/dialogs" className={style.item} activeClassName={style.active}>Messages</NavLink>
        <NavLink to="/news" className={style.item} activeClassName={style.active}>News</NavLink>
        <NavLink to="/music" className={style.item} activeClassName={style.active}>Music</NavLink>
        <NavLink to="/settings" className={`${style.item} ${style.settings}`} activeClassName={style.active}>Settings</NavLink>
      </div>
      <div>
        <h4 className={style.headline}>Friends online</h4>
        <div className={style.photoElements}>
          {photoElements}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;