const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const clients = [];

wsServer.on("connection", (newClient)=>{
    clients.push(newClient);
    // console.log("Новое подключение с фронтенда");
    // setTimeout(() => {
    //     newClient.send("Добро пожаловать на над сервер");
    // }, 5000);

    newClient.send("Добро пожаловать на сервер");

    clients.forEach(client => {
        if(client !== newClient){
            client.send(`К нам подключился ${clients.length} пользователь`);
        }
    });

    newClient.on("message", (message)=> {
        console.log(message);
    });

    newClient.on("close", (code, reason)=>{
        // console.log(code);
        // console.log(reason);
        const idx = clients.findIndex(client => client === newClient);
        console.log(clients.length);
        clients.splice(idx, 1);
        console.log(clients.length);
    });
});