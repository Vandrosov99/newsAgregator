import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Product(props) {
  const stateGlobal = useSelector(state => state);
  const posts = stateGlobal.postsReducer.posts;
  const { id } = useParams();
  const data = posts;
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
        <h1>{id}</h1>
        <h3>{title}</h3>
        <img src={imgLink} alt='' />
        <p>{textContent}</p>
        <p>views {views}</p>
      </>
    );
  } else {
    productData = <h2>Sorry. News doesn't exist</h2>;
  }
  return <div className='product-page'>{productData}</div>;
}
