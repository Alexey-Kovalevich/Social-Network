import React from 'react';
import style from './Message.module.css';


const Message = (props) => {
  return (
    <div className={style.message}>
      <img className={style.image} src={props.avatar} alt="ava" />
      {props.message}
    </div>
  )
}

export default Message;