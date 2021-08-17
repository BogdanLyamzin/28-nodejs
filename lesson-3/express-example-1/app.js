const express = require("express");
const fs = require("fs/promises");
const moment = require("moment");

const app = express();

app.use(async(req, res, next)=>{
    const date = moment().format("DD-MM-YYYY_hh:mm:ss");
    const {url, method} = req;
    await fs.appendFile("server.log", `\n${date} ${method} ${url}`);
    next();
});

// app.use((req, res, next)=>{
//     console.log("Second middleware");
//     next();
// });

app.use("/products", (req, res, next) => {
    console.log("Products middleware");
    next();
});

app.get("/", (req, res)=>{
    res.send("<h2>Home page</h2>");
});

app.get("/contacts", (req, res)=>{
    res.send("<h2>Contacts page</h2>");
});

app.use((_, res)=> {
    res.status(404).send("Not found");
});


app.listen(4000);