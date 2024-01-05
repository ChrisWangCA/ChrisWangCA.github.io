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
require('dotenv').config();

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);


const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "chriswangtemp@gmail.com",
    subject: "Contact from my portfolio",
    html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail,(error) => {
    if(error){
        res.json(error);
    }else{
        res.json({code: 200, status: "Message Sent"})
    }
  });
});

app.listen(5000, () => console.log("Server Running"));