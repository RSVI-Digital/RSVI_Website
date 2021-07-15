const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// API
const nodemailer = require('nodemailer');
require("dotenv").config();

//if (process.env.NODE_ENV === 'development') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  //}
const port = process.env.PORT || 5000;


transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var subject = req.body.subject
  var message = req.body.message


  console.log(email);
  var mail = {
    from: "hr.rsvi@gmail.com",
    to: email,
    subject: "Thanks for reacing us out ",
    text: "Hi "+name + "Thanks for reaching out to us"
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})




app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});