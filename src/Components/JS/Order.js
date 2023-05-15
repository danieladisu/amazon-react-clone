/** @format */

import React from "react";
import "../css/Order.css";
import moment from "moment/moment";
import CheckoutProduct from "./CheckoutProduct";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
function Order({ order }) {
  function orderIdToNumber(orderId) {
    const id = orderId.slice(3); // Remove the "pi_" prefix
    const num = parseInt(id.slice(-12), 36); // Convert the last 12 characters to base-36 integer
    return num;
  }

  return (
    <div className="order__container">
      <div className="order__header">
        <div className="order_header__option">
          <h4 className="optionOne">ORDER PLACED</h4>
          <h4 className="optionTwo">
            {moment
              .unix(order.data.created)
              .format("DD . MMMM . YYYY , h : mm a")}
          </h4>
        </div>
        <div className="order_header__option">
          <NumericFormat
            renderText={(value) => (
              <>
                <h4 className=" optionOne ">TOTAL</h4>
                <h4 className="orderTotalValue optionTwo">{value} </h4>
              </>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType="text"
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
        <div className="order_header__option">
          <h4 className=" optionOne">ORDER # {orderIdToNumber(order.id)}</h4>
          <h4 className="optionTwo ">
            <Link
              to="/"
              className="order_option_link linkOne header__clearLink">
              <span>View order details </span>
            </Link>
            <Link
              to="#"
              className="order_option_link linkTwo header__clearLink header__clearLin ">
              <span>Invoice </span>
            </Link>
          </h4>
        </div>
      </div>

      <div className="order">
        {order.data.basket?.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            img={item.img}
            price={item.price}
            title={item.title}
            rating={item.rating}
            hideButton
          />
        ))}
      </div>

      <div className="order__button">
        <Link to="#" className="header__clearLink order_option_link">
          <h4>Archive order</h4>
        </Link>
      </div>
    </div>
  );
}

export default Order;
