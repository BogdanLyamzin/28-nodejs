const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const {productsRouter} = require("./routes/api");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1/products", productsRouter);

app.use((_, res)=> {
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found"
    })
});

app.use((error, _, res, __)=> {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({
        status: "error",
        code: status,
        message
    })
});

const {DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT);
}).catch(error => {
    console.log(error);
    process.exit(1);
});