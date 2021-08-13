const fs = require("fs").promises;
// const addToFile = require("./fileOperations/addToFile");

// addToFile("files/file.txt", "\nSome text");

(async()=> {
    try{
        // const data = await fs.readFile("file.txt", "utf-8");
        // console.log(data);
        // const additionalText = "\nНо он не сдается и читает Ницше";
        // await fs.appendFile("files/file.txt", additionalText);
        // await fs.appendFile("files/file2.txt", "Новый файл");
        // await fs.appendFile("upload/file2.txt", "Новый файл");
        // await fs.writeFile("files/file.txt", "New file content");
    }
    catch(error){
        console.log(error.message);
    }
})();