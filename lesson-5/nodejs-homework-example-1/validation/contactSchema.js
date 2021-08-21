const Joi = require("joi");

// 067-555-55-55
// +38 (067) 555-55-55
const joiContactSchema = Joi.object({
    phone: Joi.string().pattern(new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$'))
})