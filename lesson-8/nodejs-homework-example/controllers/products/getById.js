const {Product} = require("../../models");

const getById = async (req, res, next)=> {
    try {
        const {id} = req.params;
        // const product = await Product.findOne({_id: id});
        const product = await Product.findById(id);
        console.log(product);
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