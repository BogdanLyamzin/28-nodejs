const {Product} = require("../../models");

const updatePrice = async (req, res, next)=> {
    try {
        const {id} = req.params;
        const {price} = req.body;
        const updateProduct = await Product.findByIdAndUpdate(id, {price}, {new: true});
        if(!updateProduct) {
            return res.status(404).json({
                "message": "Not found"
            });
        }
        res.json({
            updateProduct
        });
    }
    catch(error){
        next(error);
    }
};

module.exports = updatePrice;