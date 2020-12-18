import React from "react";
import noImg from "../img/No_image_available.svg";
const Post = ({ title, description, image, views }) => {
  return (
    <div className='post'>
      <div className='img-container'>
        <img
          alt='test'
          className='post__image'
          src={image ? image : noImg}
          // style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className='post__info'>
        <h2 className='post__title'>{title}</h2>
        <p className='post__description'>{description}</p>
      </div>
      <div className='views'>
        <div className='viewsInner'> Просмотрено : {views}</div>
      </div>
    </div>
  );
};

export default Post;
