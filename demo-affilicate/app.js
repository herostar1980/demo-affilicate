const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoute = require('./routes/user');


app.use(bodyParser.json());

app.use("/posts",userRoute);

module.exports = app;