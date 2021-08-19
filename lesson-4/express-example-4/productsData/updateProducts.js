const fs = require("fs/promises");

const filePath = require("./filePath");

const updateProducts = async (products) => {
    const productsString = JSON.stringify(products);
    await fs.writeFile(filePath, productsString);
};

module.exports = updateProducts;

