const express = require("express");

const {joiSchema} = require("../../models/user");
const {validation} = require("../../middlewares");
const {users: ctrl} = require("../../controllers");

const validationMiddleware = validation(joiSchema);
/*
validationMiddleware = (req, res, next) => {
        const {error} = joiSchema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: error.message
            });
        }
        next();
    }
*/

const router = express.Router();

router.get("/", ctrl.getAll);

router.post("/", validationMiddleware, ctrl.add);

// router.put("/:id", validationMiddleware, ctrl.update);

module.exports = router;