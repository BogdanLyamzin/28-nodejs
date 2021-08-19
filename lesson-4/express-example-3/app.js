const express = require("express");
const cors = require("cors");
const products = require("./products");
const logger = require('morgan')

const app = express();

app.use(cors());
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'
app.use(logger(formatsLogger))

app.get("/pages/main-page", (req, res)=>{
    res.send("<h2>Main page</h2>");
})

app.get("/api/v1/carts", (req, res)=> {
    res.status(301).json({
        status: "error",
        message: `Url move to /api/v1/orders`
    });
});

app.get("/api/v1/orders", (req, res)=> {
    res.status(201).json({
        status: "error",
        data: {
            result: products
        }
    });
});

/*
{
    dishName: "",
    price: "",
    address: "",
    id: "zfz-nxcvytr-dfgfg"
}
*/



app.get("/api/v1/profile", ()=> {

});

app.get("/api/v1/products", (req, res)=> {
    res.status(201).json({
        status: "error",
        data: {
            result: products
        }
    });
});

app.put("/api/v1/products", ()=> {

});

app.patch("/api/v1/products", ()=> {

});

app.delete("/api/v1/products", (req, res)=> {
    res.status(204).json({
        status: "error",
        data: {
            result: products
        }
    });
});

app.get("/api/v2/products", (req, res)=> {
    res.json(products.slice(0, 10));
});




app.listen(4000);