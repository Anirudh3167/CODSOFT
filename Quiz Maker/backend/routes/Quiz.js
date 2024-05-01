const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const secretKey = "SecretKey";

router.get("/",(req,res) => {
    res.json({result:"sucess",message:"This is Quiz url"});
})

module.exports = router;