const {Product} = require("../../models");

const delById = async (req, res)=> {
    try {
        const {id} = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if(!deleteProduct) {
            return res.status(404).json({
                "message": "Not found"
            });
        }
        res.json({
            deleteProduct
        })
    }
    catch(error){
        next(error);
    }
};

module.exports = delById;