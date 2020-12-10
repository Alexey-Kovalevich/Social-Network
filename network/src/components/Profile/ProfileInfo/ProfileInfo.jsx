import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <img src="https://funik.ru/wp-content/uploads/2019/05/a9bd770ddb21a85a5080.jpg" alt="img" />
      <div className={style.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;