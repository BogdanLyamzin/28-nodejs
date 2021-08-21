const express = require("express");

const router = express.Router();

const abousUsData = {
    title: "",
    pageContent: ""
}

router.get("/about-us", (req, res)=> {
    res.render("about-us", abousUsData)
});