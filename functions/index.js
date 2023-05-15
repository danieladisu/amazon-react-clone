/** @format */

const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

// API

require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);





const app = express();


app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount ==> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "usd",
  });

 
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/clone-8100d/us-central1/api

