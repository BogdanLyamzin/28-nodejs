const {productSchema} = require("../../validation");
const productsOperations = require("../../model/products");

const add = async (req, res)=> {
    try {
        const {error} = productSchema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: error.message
            })
        }
        const newProduct = await productsOperations.add(req.body);
        res.status(201).json({
            newProduct
        });
    }
    catch(error){
        next(error);
    }
};

module.exports = add;