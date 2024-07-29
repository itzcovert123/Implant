require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
var express = require("express")
var app = express()
const router = require("./routes/router")
require("./db/config")
const bcrypt = require('bcryptjs');

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:3000' 
    // Allow requests from this origin
  }));
  app.use(bodyParser.json());
app.use(express.json());
app.use(router);
// app.use("/uploads",express.static("./uploads"))

let port = process.env.PORT;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})