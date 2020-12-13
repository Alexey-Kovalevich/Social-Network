import React from 'react';
import style from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={style.dialog}>
      <div className={style.person}>
        <img className={style.image} src={props.avatar} alt="ava"/>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
      
    </div>
  )
}

export default DialogItem;