const fs = require("fs/promises");

const filePath = require("./filePath");

const getAll = async()=>{
    try {
        const data = await fs.readFile(filePath);
        const products = JSON.parse(data);
        return products;
    }
    catch(error){
        throw error;
    }
};

module.exports = getAll;