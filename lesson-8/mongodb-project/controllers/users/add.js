const {User} = require("../../models");

const add = async (req, res, next)=> {
    try {
        const result = await User.create(req.body);
        console.log(result);
        res.status(201).json({
            result
        });
    }
    catch(error){
        next(error);
    }
};

module.exports = add;