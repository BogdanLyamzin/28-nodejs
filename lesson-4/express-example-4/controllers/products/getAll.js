const data = require("../../productsData");

const getAll = async (req, res) => {
    try {
        const products = await data.getAll();
        res.json({
            status: "success",
            code: 200,
            data: {
                result: products
            }
        });
    }
    catch(error){

    }
};

module.exports = getAll;