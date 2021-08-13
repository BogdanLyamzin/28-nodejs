const {v4} = require("uuid");

const getAll = require("./getAll");
const updateProducts = require("./updateProducts");

const add = async(data) => {
    try {
        const newProduct = {...data, id: v4()};
        const products = await getAll();
        // const newProducts = [...products, newProduct];
        products.push(newProduct);
        await updateProducts(products);
        return newProduct;
    }
    catch(error){
        throw error;
    }
};

module.exports = add;