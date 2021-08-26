const productsOperations = require("../../model/products");

const delById = async (req, res)=> {
    try {
        const {id} = req.params;
        const deleteProduct = await productsOperations.del(id);
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