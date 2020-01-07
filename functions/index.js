const functions = require('firebase-functions');
//const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();




// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Add middleware to authenticate requests
//app.use(myMiddleware);

exports.date = functions.https.onRequest((req, res) => {
  res.send("okay");
})


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
/*
//CAPTCHA
const functions = require('firebase-functions')
const rp = require('request-promise')

exports.checkRecaptcha = functions.https.onRequest((req, res) => {
  const response = req.query.response
  console.log("recaptcha response", response)
  rp({
    uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
    method: 'POST',
    formData: {
      secret: 'sec key removed',
      response: response
    },
    json: true
  }).then(result => {
    console.log("recaptcha result", result)
    if (result.success) {
      res.send("You're good to go, human.")
    }
    else {
      res.send("Recaptcha verification failed. Are you a robot?")
    }
  }).catch(reason => {
    console.log("Recaptcha request failure", reason);
    res.send("Recaptcha request failed.")
  })


 */
//})

