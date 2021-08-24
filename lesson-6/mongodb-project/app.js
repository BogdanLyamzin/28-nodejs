const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const {DB_HOST, PORT = 3000} = process.env;

const app = express();

app.use(cors());

app.get("/", (req, res)=> {
    res.send("<h2>Home page</h2>");
});

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(()=> {
    app.listen(PORT);
})
.catch(error => console.log(error));