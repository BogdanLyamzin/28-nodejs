const http = require("http");

/*
- name
- lastName
- birthday
- prize: "Lenovo X120S"
*/

/*
PUT: {name, prize}

- name
- prize
*/

/*
PATCH: {prize: "macBook"}

- name
- lastName
- birthday
- prize: "macBook"
*/

const server = http.createServer((request, response)=>{
    // console.log(`Request url: ${request.url}`);
    console.log(`Request `)
    const {url} = request;
    switch(url){
        case "/":
            response.write("Home page");
            break;
        case "/contacts":
            response.write("Contacts page");
            break;
        default: 
            response.write("Not found");
    }
    response.end();
    // response.write("Welcome to hell!");
    // response.end();
});

server.listen(4000);