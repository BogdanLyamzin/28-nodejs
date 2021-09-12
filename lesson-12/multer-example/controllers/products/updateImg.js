const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
// const {BadRequest} = require("http-errors");

const {Product} = require("../../models");

// const extensionList = require("./extensionList");
const productsDir = path.join(__dirname, "../../", "public/products");

const updateImg = async(req, res) => {
    try {
        const {id} = req.params;
        const {path: tempPath, originalname} = req.file;
        // Shiera.jpg
        // const [extension] = originalname.split(".").reverse(); // ["jpg", "Shiera"];
        // if(!extensionList.includes(extension)){
        //     throw new BadRequest("Недопустимое расширение файла");
        // }
        const uploadPath = path.join(productsDir, id, originalname);
        const file = await Jimp.read(tempPath);
        await file.resize(255, 255).write(tempPath);
        await fs.rename(tempPath, uploadPath);
        const image = `/products/${id}/${originalname}`;
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