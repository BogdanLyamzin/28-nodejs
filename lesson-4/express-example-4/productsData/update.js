const updateProducts = require("./updateProducts");
const getAll = require("./getAll");

const update = async(id, updateInfo) => {
    try {
        const products = await getAll();
        const idx = products.findIndex(item => item.id === id);
        if(idx === -1){
            throw new Error(`Product with id=${id} not found`);
        }
        products[idx] = {...products[idx], ...updateInfo};
        // {id: "767580d5-f509-4f45-98f9-28e74ec4af66", "name": "Ground almonds", "price": 3, "location": "Home baking", price: 2}
        await updateProducts(products);
        return products[idx];
    }
    catch(error){
        throw error;
    }
};

module.exports = update;