const express = require("express");
const cors = require("cors");
// const createError = require("http-errors");
const { NotFound } = require("http-errors");

const app = express();

app.use(cors());
app.use(express.json());

const controllerWrapper = (ctrl) => {
    return async (req, res, next) => {
        try {
            await ctrl(req, res, next);
        }
        catch(error){
            next(error);
        }
    }
}

const getById = async (req, res, next)=> {
    const {id} = req.params;
    if(id !== 1) {
        throw new NotFound();
        // throw new createError(404, "Not found");
        // const error = createError(404, "Not found");
        // throw error;
    }
};

app.get("/products/:id", controllerWrapper(getById));

app.use((error, _, res, __)=>{
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({
        status: "error",
        code: status,
        message
    })
});

app.listen(3000);