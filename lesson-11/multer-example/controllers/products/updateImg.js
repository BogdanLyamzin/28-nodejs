const fs = require("fs/promises");
const path = require("path");

const {Product} = require("../../models");

const productsDir = path.join(__dirname, "../../", "public/products");

const updateImg = async(req, res) => {
    const {id} = req.params;
    const {path: tempPath, originalname} = req.file;
    const uploadPath = path.join(productsDir, id, originalname);
    try {
        await fs.rename(tempPath, uploadPath);
        const image = `/public/products/${id}/${originalname}`;
        await Product.findByIdAndUpdate(id, {image});
        res.json({
            status: "success",
            code: 200,
            data: {
                result: image
            }
        })
    }
    catch(error){
        await fs.unlink(tempPath);
        throw error;
    }
};

module.exports = updateImg;