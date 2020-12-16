import React from 'react';
import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from './../../redux/dialogs-reducer';

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch( sendMessageCreator() );
  }

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch( updateNewMessageBodyCreator(body) );
    console.log(body);
  }
 
  let dialogsElements = state.dialogs.map( d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/> );

  let messagesElements = state.messages.map( m => <Message avatar={m.avatar} message={m.message}/> );

  let newMessageBody = state.newMessageBody;

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={style.messages}>
        { messagesElements }
        <div className={style.addMessage}>
          <textarea 
            value={newMessageBody} 
            onChange={onNewMessageChange}
            className={style.addMessage_input} placeholder="Input your message here" cols="30" 
            rows="1">
          </textarea>
          <button onClick={onSendMessageClick} className={style.addMessage_send} type="button">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;