const {Schema, model} = require("mongoose");
const Joi = require("joi");

const productSchema = Schema({

}, {versionKey: false, timesstamps: true});

const joiSchema = Joi.object({

});

