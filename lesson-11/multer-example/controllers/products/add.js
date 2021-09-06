const fs = require("fs/promises");
const path = require("path");

const {Product} = require("../../models");

const productsDir = path.join(__dirname, "../../", "public/products");

const add = async(req, res) => {
    const result = await Product.create(req.body);
    const dirPath = path.join(productsDir, result._id);
    await fs.mkdir(dirPath);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result
        }
    })
};

module.exports = add;