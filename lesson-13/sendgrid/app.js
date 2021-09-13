const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const mail = {
    to: "bogdan.lyamzin@meta.ua",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Регистрация на сайте",
    html: "<p>Поздравляем с успешной регистрацией на нашем сайте</p>"
};

sgMail.send(mail)
    .then(()=> console.log("Email success send."))
    .catch(error => console.log(error.message));