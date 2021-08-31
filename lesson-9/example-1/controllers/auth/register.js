const bcrypt = require("bcryptjs");

const {User} = require("../../models");

const register = async(req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(409).json({
                status: "error",
                code: 409,
                message: "Already register"
            });
            /*
            return res.status(400).json({
                status: "error",
                code: 400,
                message: "Email or password wrong"
            });
            */
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
    }
    catch(error){
        next(error);
    }
};

module.exports = register;