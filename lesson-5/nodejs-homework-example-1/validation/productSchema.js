const Joi = require("joi");

const joiProductSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().min(0.01).required(),
    location: Joi.string().required()
});

module.exports = joiProductSchema;