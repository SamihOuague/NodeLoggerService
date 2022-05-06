let express = require("express");
let app = express();
let cors = require("cors")
let Logger = require("./logger/Router");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use(Logger);



app.listen(3001)