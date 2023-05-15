/** @format */

import React from "react";
import "../css/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { Rating } from "@mui/material";

function CheckoutProduct({ id, img, price, title, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const RemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={img} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
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
        {!hideButton && (
          <button onClick={RemoveFromBasket}> Remove from Basket </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
