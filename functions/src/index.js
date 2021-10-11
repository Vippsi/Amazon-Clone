/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
/* eslint-disable */
const functions = require('firebase-functions');
const cors = require('cors');
const express = require('express');
require('dotenv').config();
const stripe = require('stripe')(
  // eslint-disable-next-line max-len
  process.env.EXPRESS_PRIVATE_STRIPE_SECRET_KEY
);

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('hello');
});

app.post('/payments/create', async (req, res) => {
 
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
