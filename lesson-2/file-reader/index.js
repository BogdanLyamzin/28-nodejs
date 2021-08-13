const fs = require("fs");

fs.readFile("read.txt", "utf-8", (error, data)=> {
    if(error){
        console.log(error.message);
        return;
    }
    console.log(data);
    // const text = data.toString();
    // console.log(text);
});