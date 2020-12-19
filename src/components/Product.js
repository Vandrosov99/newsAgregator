import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Product(props) {
  const stateGlobal = useSelector(state => state);
  const posts = stateGlobal.postsReducer.posts;
  const { id } = useParams();
  const data = posts;
  const dateNow = new Date(new Date().toString().split(" GMT ")[0] + "UTC")
    .toISOString()
    .split(".")[0];
  console.log(stateGlobal);
  console.log(data);
  let product;
  if (data) {
    product = data.find(p => p.id === Number(id));
  } else {
    product = false;
  }
  let productData;
  if (product) {
    const { title, textContent, imgLink, views } = product;
    console.log(product);
    productData = (
      <>
        <h1 className='product-page_title'>{title}</h1>
        <img src={imgLink} alt='' className='proudct-page__image' />
        <div className='product-page__text'>
          <p className='product-page__desc'>{textContent}</p>
          <p className='product-page__views'>
            Просмотрено на данный момент уже {views} людьми
          </p>
          <p className='product-page__date'> Сейчас : {dateNow}</p>
        </div>
      </>
    );
  } else {
    productData = <h2>Sorry. News doesn't exist</h2>;
  }
  return <div className='product-page'>{productData}</div>;
}
