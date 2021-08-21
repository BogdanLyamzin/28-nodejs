const productsOperations = require("../../model/products");

const getById = async (req, res)=> {
    try {
        const {id} = req.params;
        const product = await productsOperations.getById(id);
        if(!product) {
            return res.status(404).json({
                "message": "Not found"
            });
        }
        res.json({
            product
        })
    }
    catch(error){
        next(error);
    }
};

module.exports = getById;