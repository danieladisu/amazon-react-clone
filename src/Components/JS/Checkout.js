/** @format */

import React from "react";
import "../css/Checkout.css";
import checkoutCard from "../images/home/OCC_Amazon1._CB423492668_.jpg";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkoutCard} alt="checkout" />
        <h3>Hello {user?.email}</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>
        {basket.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            img={item.img}
            price={item.price}
            title={item.title}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
