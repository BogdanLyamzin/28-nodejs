const productOperations = require("./products");

(async()=>{
    try{
        // const products = await productOperations.getAll();
        // console.log(products);

        const id = "767580d5-f509-4f45-98f9-28e74ec4af66";

        // const oneProduct = await productOperations.getById(id);
        // console.log(oneProduct);

        // const updateProduct = await productOperations.update(id, {price: 2});
        // console.log(updateProduct);

        // const deleteProduct = await productOperations.del(id);
        // console.log(deleteProduct);

        const data = {
            name: "iPhone X",
            price: 4,
            location: "Apple"
        };
        const newProduct = await productOperations.add(data);
        console.log(newProduct);
    }
    catch(error){
        console.log(error.message);
    }
})();