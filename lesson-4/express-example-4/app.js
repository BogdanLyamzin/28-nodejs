const express = require("express");
const cors = require("cors");

const logger = require('morgan');

const api = require("./api");

const app = express(); // app - наш сервер

app.use(cors());
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));

app.use("/api/v1/products", api.products);

app.listen(4000);