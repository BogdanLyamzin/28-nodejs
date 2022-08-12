const nodemailer = require('nodemailer')

require('dotenv').config()

const config = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'goitnodejs@meta.ua',
    pass: process.env.PASSWORD,
  },
}

const transporter = nodemailer.createTransport(config)
const emailOptions = {
  from: 'goitnodejs@meta.ua',
  to: 'bogdan.lyamzin.d@gmail.com',
  subject: 'Nodemailer test',
  text: 'Привет. Мы тестируем отправку писем!',
  html: 'Привет. Мы тестируем отправку писем!',
}

transporter
  .sendMail(emailOptions)
  .then((info) => console.log(info))
  .catch((err) => console.log(err))