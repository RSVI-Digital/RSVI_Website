const express = require('express');




const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')


var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// API
mongoose.connect("mongodb+srv://Vinayak:kayaniv@cluster0.2jjwn.mongodb.net/Forms");
const contactUsSchema = {

name :String,
email :String,
message :String

}


const contactUs = mongoose.model("GetInTouch",contactUsSchema);


//if (process.env.NODE_ENV === 'development') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  //}
const port = process.env.PORT || 5000;

app.post("/send",function(req,res) {


  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.message);

  let newContact = new contactUs ( {
    name : req.body.name,
    email :req.body.email,
    message :req.body.message

  })

  newContact.save();
 
    res.json({
     status: 'success'
    })
  
}



)


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});