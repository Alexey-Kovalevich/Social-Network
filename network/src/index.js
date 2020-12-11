import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  {id: 1, message: 'Hi, how are you?', likeCount: 12}, 
  {id: 2, message: 'Hi, nice to meet you!', likeCount: 34}, 
  {id: 3, message: 'Wow, props are great', likeCount: 18}
]

let dialogs = [
  {id: 1, name: 'Dimych'}, 
  {id: 2, name: 'Andrey'}, 
  {id: 3, name: 'Sveta'}, 
  {id: 4, name: 'Sasha'}, 
  {id: 5, name: 'Victor'}, 
  {id: 6, name: 'Valera'}
]

let messages = [
  {id: 1, message: 'Hi'}, 
  {id: 2, message: 'How is your learning?'}, 
  {id: 3, message: 'Cool'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
