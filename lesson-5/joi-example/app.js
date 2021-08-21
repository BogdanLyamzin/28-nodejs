const Joi = require("joi");

const joiProductSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().min(0.01).required(),
    location: Joi.string().required()
});

const newProduct = {
    "name": "book",
    "price": 7,
};

const {error} = joiProductSchema.validate(newProduct);
console.log(error);