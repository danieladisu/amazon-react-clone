/** @format */

import React from "react";
import "../css/Product.css";
import { useStateValue } from "./StateProvider";
import { Rating, keyframes } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

function Product({ id, title, price, img, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id: id, title: title, img: img, price: price, rating: rating },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="">{title}</p>
        {
          <p className="product__price">
            <small>$</small>
            <strong key={id}>{price}</strong>
          </p>
        }
        <div className="product__rating  ">
          {Array(id)
            .fill()
            .map((_, i) => (
              <Rating
                key={i}
                name="size-large"
                defaultValue={rating}
                size="large"
                readOnly
              />
            ))}
        </div>
      </div>
      <hr/>
<div className="m-2">
<img src={img} alt="" />

</div>
      <button onClick={addToBasket}> Add to Basket</button>
 </div>
  );
}

export default Product;
