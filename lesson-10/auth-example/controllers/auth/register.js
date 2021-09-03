const bcrypt = require("bcryptjs");
const {Conflict} = require("http-errors");

const {User} = require("../../models");

const register = async(req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        throw new Conflict("Already register");
    }

    // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    // const result = await User.create({email, password: hashPassword});
    const newUser = new User({email});
    newUser.setPassword(password);
    await newUser.save();
    
    res.status(201).json({
        status: "success",
        code: 201,
        message: "Success register"
    })
};

module.exports = register;