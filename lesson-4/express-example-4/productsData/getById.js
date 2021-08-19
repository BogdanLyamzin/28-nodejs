const getAll = require("./getAll");

const getById = async(id) => {
    try {
        const products = await getAll();
        const selectProduct = products.find(item => item.id === id);
        if(!selectProduct){
            throw new Error(`Product with id=${id} not found`);
        }
        return selectProduct;
    }
    catch(error){
        throw error;
    }
};

module.exports = getById;