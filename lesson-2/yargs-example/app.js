const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const products = require("./products");

const arr = hideBin(process.argv);
// console.log(arr);

const {argv} = yargs(arr);
console.log(argv);

switch(argv.action){
    case "getAll":
        console.log(products);
        break;
    case "getById":
        if(argv.id){
            const result = products.find(item => item.id === id);
            console.log(result);
            break;
        }
        console.log("Вы не указали id!");
        break;
    default: 
        console.log("action не указан")
}