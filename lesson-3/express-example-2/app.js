const express = require("express");
const cors = require("cors");
const products = require("./products");

const app = express();

app.use(cors());

app.get("/products", (req, res)=> {
    // res.send(null);
    // res.json(null);
    res.json(products);
    // res.send(products);
})

app.listen(4000);