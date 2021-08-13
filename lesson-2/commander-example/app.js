const {program} = require("commander");

const products = require("./products");

program
    .option("-a, --action <type>", "action type")
    .option("-i, --id <type>", "product id");

program.parse(process.argv);

const options = program.opts();

// console.log(options);

switch(options.action){
    case "getAll":
        console.log(products);
        break;
    case "getById":
        if(options.id){
            const product = products.find(item.id === id);
            console.log(product);
        }
        else console.log("id не указан");
        break;
}