const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    // 'pk_test_51INf8ILZ8xpRgpfiLp5TR4VxeCIvrjg9ZjHXIipJA9ES79jzVjsHeuKYDkCi1NbBXCbLD0hFaOy6KeeqgZncoCCC0019O5lnlq'
);
// - App config
const app = express()

// - middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/',(request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
  
    console.log('Payment Request Recieved for this amount >>> ', total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: 'usd',
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });


// listen command
exports.api = functions.https.onRequest(app);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
