// const {productSchema} = require("../../models/product");
const {Product} = require("../../models");

const updateById = async (req, res, next)=> {
    try {
        // const {error} = productSchema.validate(req.body);
        // if(error){
        //     return res.status(400).json({
        //         message: error.message
        //     })
        // }
        const {id} = req.params;
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});
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