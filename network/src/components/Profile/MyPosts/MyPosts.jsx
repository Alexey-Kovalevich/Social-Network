import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} /> );

  let newPostElement = React.createRef(); 

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className={style.myPosts}>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
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