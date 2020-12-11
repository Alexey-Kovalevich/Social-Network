import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} /> )

  return (
    <div className={style.myPosts}>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
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