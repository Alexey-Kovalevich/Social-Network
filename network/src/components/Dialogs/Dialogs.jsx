import React from 'react';
import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
 
  let dialogsElements = props.state.dialogs.map( d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/> );

  let messagesElements = props.state.messages.map( m => <Message avatar={m.avatar} message={m.message}/> )

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={style.messages}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs;