const express = require("express");

const {joiSchema} = require("../../models/product");
const {validation, controllerWrapper, upload} = require("../../middlewares");
const {products: ctrl} = require("../../controllers");

const router = express.Router();

router.get("/", controllerWrapper(ctrl.getAll));

router.post("/", validation(joiSchema), controllerWrapper(ctrl.add));

router.patch("/:id", upload.single("image"), controllerWrapper(ctrl.updateImg));

module.exports = router;