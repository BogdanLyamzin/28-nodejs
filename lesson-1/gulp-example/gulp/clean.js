const del = require("del");

const {dist} = require("./paths");
const clean = ()=> del(dist);

module.exports = clean;