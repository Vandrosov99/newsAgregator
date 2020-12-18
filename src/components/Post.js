import React from "react";

const Post = ({ title, description, image }) => {
  return (
    <div className='post'>
      <img
        alt='test'
        className='post__image'
        src={image}
        // style={{ backgroundImage: `url(${image})` }}
      />
      <div className='post__info'>
        <h2 className='post__title'>{title}</h2>
        <p className='post__description'>{description}</p>
      </div>
    </div>
  );
};

export default Post;
