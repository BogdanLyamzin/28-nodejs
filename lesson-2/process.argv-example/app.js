const products = require("./products");
// console.log(process.argv);

const action = process.argv.slice(2).indexOf("--action");

if(action !== -1) {
    const actionValue = process.argv[action + 1];
    switch(actionValue){
        case "getAll":
            console.log(products);
            break;
        case "getById":
            
    }
}