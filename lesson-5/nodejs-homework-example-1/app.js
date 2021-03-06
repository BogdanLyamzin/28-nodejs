const express = require('express')
const logger = require('morgan')
const cors = require('cors')
// const bodyParser = require("body-parser");

const productsRouter = require("./routes/api/products");
// const contactsRouter = require('./routes/api/contacts')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
// app.use(bodyParser.json())

// app.set("view engine", "ejs");
// app.set("views", "./views");

app.use("/api/products", productsRouter);

// app.use('/api/contacts', contactsRouter)

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, _, res, __) => {
  const {status = 500, message = "Server error"} = err;
  res.status(status).json({ message })
})

module.exports = app
