import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src="https://i.pinimg.com/236x/10/ad/ab/10adabc386ba646f7df5f4e4d3156272.jpg" alt="avatar" />
      { props.message }
      <div>
        <span>Like: { props.likeCount }</span>
      </div>
    </div>
  )
}

export default Post;