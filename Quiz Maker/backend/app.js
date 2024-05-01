// const dotenv = require('dotenv');
// dotenv.config();
const express = require('express');
// const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8000;
const cors = require("cors");
const secretKey = "secretKey";
const serverless = require('serverless-http');

// Setting the address.

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors({origin:"*",credentials:true}));
app.use(cookieParser());
app.use('/public',express.static('./public'));

app.use('/api/v1/user',require("./routes/User"));

app.use('/api/v1/quiz',require("./routes/Quiz"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports.handler = serverless(app);
