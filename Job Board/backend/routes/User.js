const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const secretKey = "SecretKey";
// const multer  = require("multer");
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "../public/images")
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, Date.now() + "_" + file.originalname)
//     }
// })
// const upload = multer({ storage: storage })

router.get("/",(req,res) => {
    res.send("This is users page");
})

module.exports = router;