const {Product} = require("../../models");

const getAll = async (req, res, next)=> {
    try {
        const products = await Product.find({});
        res.json({
            products
        });
        // res.json({
        //     status: "success",
        //     code: 200,
        //     data: {
        //         result: products
        //     }
        // });
    }
    catch(error){
        next(error);
    }
}

module.exports = getAll;