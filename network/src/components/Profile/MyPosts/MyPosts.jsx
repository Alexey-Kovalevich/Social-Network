import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
        <Post message='Hi, how are you?' likeCount='15' />
        <Post message='Hi, nice to meet you!' likeCount='30' />
        <Post message='Wow, props are great' likeCount='9' />
      </div>
    </div>
  )
}

export default MyPosts;