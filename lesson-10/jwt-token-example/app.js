const jwt = require("jsonwebtoken");

const SECRET_KEY = "secret word";

const payload = {
    id: "fgfghffsfgd2122"
};

const token = jwt.sign(payload, SECRET_KEY);
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const result = jwt.verify(token, SECRET_KEY);
    // const result = jwt.verify(`${token}22`, SECRET_KEY);
    console.log(result);
}
catch(error){
    console.log(error.message);
}