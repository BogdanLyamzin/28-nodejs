const fs = require("fs/promises");
const path = require("path");
const gravatar = require("gravatar");

const {Product} = require("../../models");

const productsDir = path.join(__dirname, "../../", "public/products");

const add = async(req, res) => {
    const defaultImage = gravatar.url("bogdan@gmail.com", {s: "250"}, true);
    // const defaultImage = gravatar.url(req.body.email, {s: "250"}, true);
    const newProduct = {...req.body, image: defaultImage};
    const result = await Product.create(newProduct);
    const id = result._id.toString();
    const dirPath = path.join(productsDir, id);
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