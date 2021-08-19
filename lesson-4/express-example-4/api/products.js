const express = require("express");

const {products: ctrl} = require("../controllers");

const router = express.Router();
console.log(ctrl);
// напиши роут на получения всех товаров
// напиши роут на получения одного товара по id

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

// router.post("/", ctrl.add);

// router.put("/:id", ctrl.update);

// router.delete("/:id", ctrl.remove);

module.exports = router;
