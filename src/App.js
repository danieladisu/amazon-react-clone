/** @format */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import { useStateValue } from "./Components/JS/StateProvider";
import { auth } from "./Components/JS/firebase";
import Checkout from "./Components/JS/Checkout";
import Payment from "./Components/JS/Payment";
import Header from "./Components/JS/Header";
import Footer from "./Components/JS/Footer";
import Orders from "./Components/JS/Orders";
import Login from "./Components/JS/Login";
import Home from "./Components/JS/Home";

const promise = loadStripe(
  "pk_test_51Mxv4vIeWCIX8ZRZOYGArGYyM5H6AVNpOnh9ZDwTqrzDz5eg0ESmxSR0gKIUckHOapTg5CpdG770Q39zvXxJEUAI00gLpLxEyM"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />

          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
