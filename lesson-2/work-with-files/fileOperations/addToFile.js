const fs = require("fs").promises;

const addToFile = async (fileName, text) => {
    try{
        await fs.appendFile(fileName, text);
       
    }
    catch(error){
        console.log(error.message);
    }
};

module.exports = addToFile;