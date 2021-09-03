const func = (value) => {
    try {
        console.log(value.name);
        // throw new Error("Test error");
    }
    catch(error){
        if(error.message.includes("Cannot read property")) {
            error.message = "Свойство не найдено";
        }
        // if(error.message.includes("id error")){
        //     error.status = 404;
        //     error.message = "Not found";
        // }
        // next(error);
        throw error;
    }
}
try {
    func();
}
catch(error){
    console.log(error.message);
}
