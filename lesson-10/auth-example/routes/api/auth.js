const express = require("express");

const {joiSchema} = require("../../models/user");
const {validation, controllerWrapper, authenticate} = require("../../middlewares");
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
router.post("/register", userValidationMiddleware, controllerWrapper(ctrl.register));

router.post("/login", userValidationMiddleware, controllerWrapper(ctrl.login));

router.get("/logout", controllerWrapper(authenticate), controllerWrapper(ctrl.logout));

module.exports = router;