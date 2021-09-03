const {Schema, Types, model} = require("mongoose");
const Joi = require("joi");

// const authorSchema = Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     }
// });

// const bookSchema = Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         min: 0.01,
//         required: true
//     },
//     author: {
//         type: Types.ObjectId,
//         ref: "author",
//         required: true
//     }
//     // author: {
//     //     name: {
//     //         type: String,
//     //         required: true
//     //     },
//     //     lastName: {
//     //         type: String,
//     //         required: true
//     //     },
//     //     email: {
//     //         type: String,
//     //         required: true,
//     //         unique: true
//     //     }
//     // }
// })

const orderSchema = Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: Types.ObjectId,
        ref: "user",
        required: true
    }
}, {versionKey: false, timesstamps: true});

const joiSchema = Joi.object({
    name: Joi.string().required()
});

const Order = model("order", orderSchema);

module.exports = {Order, joiSchema};
