// const fs = require("fs/promises");
const fs = require("fs").promises;

const readFile = async(fileName) => {
    try {
        const data = await fs.readFile(fileName, "utf8");
        const newData = `${data}\nИ ни слова про Экслера`;
        await fs.writeFile(fileName, newData);
    }
    catch(error){
        console.log(error.message);
    }
};

readFile("read.txt");

// const readFile = (fileName) => {
//     fs.readFile(fileName, "utf8")
//         .then(data => {
//             const newData = `${data}\nИ ни слова про Экслера`;
//             fs.writeFile(fileName, newData)
//                 .then(()=> console.log("Write success"))
//                 .catch(error => console.log(error));
//         })
//         .catch(error => console.log(error));
// };

// readFile("read.txt");



// fs.readFile("read2.txt", "utf8")
//     .then(data => console.log(data))
//     .catch(error => console.log(error));