const {Schema, model} = require("mongoose");
const Joi = require("joi");
// Напишите сохранение пользователя в базе

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegexp = /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/;

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: emailRegexp,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        match: phoneRegexp,
        // validate: {
        //     validator(value) {
        //       return /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/.test(value);
        //     },
        //     message: props => `${props.value} is not a valid phone number!`
        //   },
        unique: true
        // minlength: 15,
        // maxlength: 15
    },
    age: {
        type: Number,
        min: 0,
        max: 120,
        required: [true, "Возраст нужно указывать обязательно"]
    },
    status: {
        type: String,
        enum: ["customer", "admin"],
        default: "customer"
    },
    country: {
        type: String,
        default: "Ukraine"
    }
}, {versionKey: false, timestamps: true, retainKeyOrder: true});

const joiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    phone: Joi.string().pattern(phoneRegexp).required(),
    age: Joi.number().min(0).max(120).required(),
    status: Joi.string(),
    country: Joi.string()
});

const User = model("user", userSchema);
// "category" => "categories"
// "mouse" => "mice"

module.exports = {User, joiSchema};
