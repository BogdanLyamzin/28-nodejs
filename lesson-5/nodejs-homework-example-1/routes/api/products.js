const express = require("express");

const {productSchema} = require("../../validation");
const productsOperations = require("../../model/products");

const router = express.Router();
// GET /api/products
router.get("/", async (req, res, next)=> {
    try {
        const products = await productsOperations.getAll();
        res.json({
            products
        });
        // res.json({
        //     status: "success",
        //     code: 200,
        //     data: {
        //         result: products
        //     }
        // });
    }
    catch(error){
        next(error);
    }
});
// GET /api/products/48bd1cd8-72ca-42cc-8457-156bb8c30873
router.get("/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const product = await productsOperations.getById(id);
        if(!product) {
            return res.status(404).json({
                "message": "Not found"
            });
        }
        res.json({
            product
        })
    }
    catch(error){
        next(error);
    }
})
// POST /api/v1/products
router.post("/", async (req, res)=> {
    try {
        const {error} = productSchema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: error.message
            })
        }
        const newProduct = await productsOperations.add(req.body);
        res.status(201).json({
            newProduct
        });
    }
    catch(error){
        next(error);
    }
})

// PUT /api/products
router.put("/:id", async (req, res)=> {
    try {
        const {error} = productSchema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: error.message
            })
        }
        const {id} = req.params;
        const updateProduct = await productsOperations.update(id, req.body);
        if(!updateProduct) {
            return res.status(404).json({
                "message": "Not found"
            });
        }
        res.json({
            updateProduct
        })
    }
    catch(error){
        next(error);
    }
})

router.delete("/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const deleteProduct = await productsOperations.del(id);
        if(!deleteProduct) {
            return res.status(404).json({
                "message": "Not found"
            });
        }
        res.json({
            deleteProduct
        })
    }
    catch(error){
        next(error);
    }
})

module.exports = router;