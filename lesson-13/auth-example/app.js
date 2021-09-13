const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const {authRouter, ordersRouter} = require("./routes/api");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/orders", ordersRouter);
// POST - /api/v1/auth/register
// POST - /api/v1/auth/login
// GET - /api/v1/auth/logout

// POST - /api/v1/auth/signup
// POST - /api/v1/auth/signin
// GET - /api/v1/auth/signout

app.use((_, res)=>{
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found"
    })
});

app.use((error, _, res, __)=>{
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({
        status: "error",
        code: status,
        message
    });
});

const {DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    app.listen(PORT)
}).catch(error => console.log(error))