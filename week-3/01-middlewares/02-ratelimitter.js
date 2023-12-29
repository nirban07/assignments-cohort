const request = require('supertest');
const assert = require('assert');
const express = require('express');
const { copyFileSync } = require('fs');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second
const port = 3000;
let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.use((req, res, next) => {
  if (Object.keys(numberOfRequestsForUser).includes(req.headers["user-id"])) {
    if (numberOfRequestsForUser[req.headers['user-id']] > 3) {
      res.status(404).send()
      // next()
    } else {
      numberOfRequestsForUser[req.headers['user-id']]++;
      next()
    }
  }
  else {
    numberOfRequestsForUser[req.headers['user-id']] = 0;
    next()
  }
  // console.log("request count is now ", numberOfRequestsForUser[req.headers["user-id"]])

})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;