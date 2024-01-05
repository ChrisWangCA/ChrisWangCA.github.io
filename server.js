require('dotenv').config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require('fs');


const app = express();
app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const visitTime = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  
  const logEntry = `${visitTime} - IP: ${ip} - Method: ${method} - URL: ${url}\n`;


  fs.appendFile('access.log', logEntry, (err) => {
    if (err) {
      console.error('cannot write into log', err);
    }
  });
  next(); 
});


app.use("/", router);


console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);



app.listen(5000, () => console.log("Server Running"));