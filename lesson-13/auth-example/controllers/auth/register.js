const bcrypt = require("bcryptjs");
const {v4} = require("uuid");
const {Conflict} = require("http-errors");

const {sendMail} = require("../../utils");
const {User} = require("../../models");

const register = async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        throw new Conflict("Already register");
    }

    // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    // const result = await User.create({email, password: hashPassword});

    // const newUser = new User({email, verifyToken: v4()});
    const newUser = new User({email});
    newUser.createVerifyToken();
    newUser.setPassword(password);

    await newUser.save();

    const {verifyToken} = newUser;
    const data = {
        to: email,
        subject: "Подтверждение регистрации на сайте",
        html: `<a href="http://localhost:3000/api/v1/auth/verify/${verifyToken}">Подтвердите регистрацию</a>`
    };

    await sendMail(data);

    res.status(201).json({
        status: "success",
        code: 201,
        message: "Success register",
        // html: `<a href="http://localhost:3000/api/v1/auth/verify/${verifyToken}">Подтвердите регистрацию</a>`
    })
};

module.exports = register;