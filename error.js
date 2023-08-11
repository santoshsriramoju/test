const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    //Log to console for Dev
    console.log(err);


    //Mongoose bad ObjectId
    if (err.name === "CastError") {
        const message = `Resource not found`;
        err = new ErrorResponse(message, 404);
    }
    
    //Mongoose duplicate error
    if(err.code === 11000){
        const message = `Duplicate field value entered`;
        err = new ErrorResponse(message, 400);
    }

    // Mongoose validation error
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message);
        err = new ErrorResponse(message, 400);
    }
    
    res.status(err.statusCode || 500).json({
        success: false, error: err.message || 'Server Error'
    });

}

module.exports = errorHandler;