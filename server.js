const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API
const client = mongoose.connect("mongodb+srv://Vinayak:kayaniv@cluster0.2jjwn.mongodb.net/Forms");

const contactUsSchema = {

  name: String,
  email: String,
  message: String

}

const joinUsSchema = {

  name: String,
  email: String,
  department: String,
  message: String

}

const collabSchema = {

  name: String,
  email: String,
  type: String,
  message: String

}



const contactUs = mongoose.model("GetInTouch", contactUsSchema);
const joinUs = mongoose.model("JoinUs", joinUsSchema);
const collabWithUs = mongoose.model("Collaborations", collabSchema);

//if (process.env.NODE_ENV === 'development') {
// Set static folder
app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
//}
const port = process.env.PORT || 5000;

app.post("/send", function (req, res) {

  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.message);

  let newContact = new contactUs({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message

  })

  newContact.save();

  res.json({
    status: 'success'
  })

}

)


app.post("/joinus", function (req, res) {

  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.department);
  console.log(req.body.message);

  let newJoin = new joinUs({
    name: req.body.name,
    email: req.body.email,
    department: req.body.department,
    message: req.body.message

  })

  newJoin.save();

  res.json({
    status: 'success'
  })

}
)

app.post("/collabwithus", function (req, res) {

  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.department);
  console.log(req.body.message);

  let newCollab = new collabWithUs({
    name: req.body.name,
    email: req.body.email,
    type: req.body.type,
    message: req.body.message

  })

  newCollab.save();

  res.json({
    status: 'success'
  })

}


)







app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});