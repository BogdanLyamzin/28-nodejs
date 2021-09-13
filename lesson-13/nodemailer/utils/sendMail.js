const nodemailer = require("nodemailer");

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

/*
data = {
    to: "",
}
*/
const sendMail = async(data) => {
    try {
        const email = {...data, from: "bogdan.lyamzin@meta.ua"};
        await transporter.sendMail(email);
    }
    catch(error){
        return false
    }
}

module.exports = sendMail;
