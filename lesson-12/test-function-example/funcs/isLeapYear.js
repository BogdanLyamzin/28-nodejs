const isLeapYear = (year)=> {
    if(year === undefined){
        throw new Error("Нужно передать аргумент - целое число больше 41");
    }
    if(typeof year !== "number") {
        throw new Error("Аргумент должен быть числом");
    }
    if(!Number.isInteger(year)){
        throw new Error("Год должен быть целым числом");
    }
    if(year < 42) {
        throw new Error("Год должен быть 42 или больше");
    }
    const date = new Date(year, 2, 0);
    const days = date.getDate();
    return (days === 29);
}

module.exports = isLeapYear;