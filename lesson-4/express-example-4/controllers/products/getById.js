const data = require("../../productsData");

const getById = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await data.getById(id);
        res.json({
            status: "success",
            code: 200,
            data: {
                result: product
            }
        });
    }
    catch(error){

    }
};

module.exports = getById;