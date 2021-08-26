const getAll = require("./getAll");

const getById = async(id) => {
    try {
        const products = await getAll();
        const selectProduct = products.find(item => item.id === id);
        if(!selectProduct){
            return null;
        }
        return selectProduct;
    }
    catch(error){
        throw error;
    }
};

module.exports = getById;