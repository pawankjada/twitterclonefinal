const express = require('express');
// require is how to import code into file. Built in function that looks for a package and installs it. Package is a library of code that we import
//npm install --save command that installs different pacakges
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
// readies port 3000
const app = express();
//takes express function and stores it into app


app.use(express.urlencoded({
  extended: true
}));
// allows the server to view more then strings and arrays
app.use(express.json());
// run json function and allows it to be used
app.use(express.static("public"));


mongoose.connect('mongodb://localhost/twitter', {
  useNewUrlParser: true
});


require('./routes/api-routes')(app);
// shows server what response to give when certain command is input
require('./routes/html-routes')(app);


app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});