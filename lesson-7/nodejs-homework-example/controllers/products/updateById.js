const {productSchema} = require("../../validation");
const productsOperations = require("../../model/products");

const updateById = async (req, res)=> {
    try {
        const {error} = productSchema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: error.message
            })
        }
        const {id} = req.params;
        const updateProduct = await productsOperations.update(id, req.body);
        if(!updateProduct) {
            return res.status(404).json({
                "message": "Not found"
            });
        }
        res.json({
            updateProduct
        })
    }
    catch(error){
        next(error);
    }
};

module.exports = updateById;