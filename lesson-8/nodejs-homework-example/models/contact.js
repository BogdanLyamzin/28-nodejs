const {Schema, model} = require("mongoose");
const Joi = require("joi");

const contactSchema = Schema({
    name: {
        type: String,
        required: [true, "Имя контакта обязательно"]
    }
}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
    name: Joi.string().required()
});

const Contact = model("contact", contactSchema);

module.exports = {
    Contact,
    joiSchema
};