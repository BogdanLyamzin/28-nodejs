// const {productSchema} = require("../../modeles/product");
const {Product} = require("../../models");

const add = async (req, res, next)=> {
    try {
        // const {error} = productSchema.validate(req.body);
        // if(error){
        //     return res.status(400).json({
        //         message: error.message
        //     })
        // }
        const result = await Product.create(req.body);
        //
        res.status(201).json({
            result
        });
    }
    catch(error){
        next(error);
    }
};

module.exports = add;