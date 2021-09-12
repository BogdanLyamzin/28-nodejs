const {Schema, model} = require("mongoose");
const Joi = require("joi");

const productSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0.01
    },
    image: {
        type: String,
        default: ""
    }
}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().min(0.01).required(),
    image: Joi.string()
});

const Product = model("product", productSchema);

module.exports = {Product, joiSchema};