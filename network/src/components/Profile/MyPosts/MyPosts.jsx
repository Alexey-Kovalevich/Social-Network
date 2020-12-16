import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer'

const MyPosts = (props) => {

  let postElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} /> );

  let newPostElement = React.createRef(); 

  let addPost = () => {
    props.dispatch( addPostCreator() );
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={style.myPosts}>
      <h3>My Posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
      </div>
      <div>
        <button onClick={ addPost }>Add post</button>
      </div>
      
      <div>
        New Post
        </div>
      <div>
        { postElements }
      </div>
    </div>
  )
}

export default MyPosts;