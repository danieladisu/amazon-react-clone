/** @format */

import React, { useEffect, useState } from "react";
import "../css/Payment.css";
import "../css/DemoCard.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { NumericFormat } from "react-number-format";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);

  const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   const getClientSecret = async () => {

  //     const response = await axios({
  //       method: "post",
  //       url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
  //     });
  //     setClientSecret(response.data.clientSecret);
  //   };
  //   getClientSecret();
  // }, [basket]);
  useEffect(() => {
    const getClientSecret = async () => {
      const amount = getBasketTotal(basket) * 100;

      const response = await axios({
        method: "post",
        url: `/payments/create?total=${amount}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("The Secret is ==>", clientSecret);
  // console.log(basket);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setProcessing(true);
    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({ type: "EMPTY_BASKET" });
        navigate("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : null);
  };
  // const displayCardNumber = () => {
  //   const demoCard = document.getElementById("demoCard");
  //   demoCard.style.display = "block";
  // };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout:(
          <Link to="/checkout">{basket?.length} items ) </Link>
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>36344 Banhofstraße </p>
            <p>Lauterbach</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket?.map((item) => (
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
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>{" "}
            <div className="demoCardDev">
              <h3 className="demoCardInstructions">
                You can use the demo Card number
              </h3>
              <div className="demoCardNumber" id="demoCard">
                <p> CardN = 4242 4242 4242 4242 </p>
                <p> MM = 04 / 24 </p>
                <p> YY = 242 </p>
                <p> ZIP = 42424 </p>
              </div>{" "}
            </div>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <div className="payment__priceContainer">
                <NumericFormat
                  value={getBasketTotal(basket)}
                  renderText={(value) => (
                    <h3>
                      Order Total:<h4 className="orderTotalValue">{value} </h4>{" "}
                    </h3>
                  )}
                  decimalScale={2}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <CardElement onChange={handleChange} className="cardElement" />

                <button
                  disabled={processing || disabled || succeeded}
                  className={`isDisabled ${!disabled && "paymentBtnActive"} `}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
