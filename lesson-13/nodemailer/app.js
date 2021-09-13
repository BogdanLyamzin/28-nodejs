const nodemailer = require("nodemailer");
require("dotenv").config();

const {EMAIL_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua", 
    port: 465, // 25, 465, 2255
    secure: true,
    auth: {
        user: "bogdan.lyamzin@meta.ua",
        pass: EMAIL_PASSWORD
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const email = {
    to: "bogdan.lyamzin.d@gmail.com",
    from: "bogdan.lyamzin@meta.ua",
    subject: "Регистрация на сайте",
    html: "<p>Поздравляем с успешной регистрацией на нашем сайте</p>"
};

transporter.sendMail(email)
    .then(()=> console.log("Email success send"))
    .catch(error => console.log(error.message));
