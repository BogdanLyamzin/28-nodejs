const express = require("express");

const ctrl = require("../../controllers/products");

const productsOperations = require("../../model/products");

const router = express.Router();
// GET /api/products
router.get("/", ctrl.getAll);
// GET /api/products/48bd1cd8-72ca-42cc-8457-156bb8c30873
router.get("/:id", ctrl.getById);
// POST /api/v1/products
router.post("/", ctrl.add);

// PUT /api/products
router.put("/:id", ctrl.updateById)

router.delete("/:id", ctrl.delById)

module.exports = router;