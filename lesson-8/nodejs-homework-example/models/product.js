const {Schema, model} = require("mongoose");
const Joi = require("joi");

const productSchema = Schema({
    price: {
        type: Number,
        required: [true, "Цена товара обязательно"],
        min: 0.01
    },
    name: {
        type: String,
        required: [true, "Название товара обязательно"]
    },
    // size: {
    //     width: {
    //         type: String,
    //         required: true
    //     }
    // },
    // array: [{
    //     name: String
    // }],
}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().min(0.01).required(),
});

const Product = model("product", productSchema);

module.exports = {
    Product,
    joiSchema
};