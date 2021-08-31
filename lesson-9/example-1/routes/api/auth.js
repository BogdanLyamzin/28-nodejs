const express = require("express");

const {joiSchema} = require("../../models/user");
const {validation} = require("../../middlewares");
const {auth: ctrl} = require("../../controllers");

const router = express.Router();

const userValidationMiddleware = validation(joiSchema);
/*
     const userValidationMiddleware = (req, res, next) => {
        const {error} = joiSchema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: error.message
            });
        }
        next();
    }
*/
router.post("/register", userValidationMiddleware, ctrl.register);

router.post("/login", userValidationMiddleware, ctrl.login);

// router.get("/logout", ctrl.logout);

module.exports = router;