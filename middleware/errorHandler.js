const ErrorResponse = require("../utils/errorResponse");
const errorResponse = require("../utils/errorResponse");
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  let errorType = null;
  let errorField = null;
  error.message = err.message;
  //for developer
  console.log(err);
  //mongoose castError
  if (err.name === "CastError") {
    const message = {
      errorMessage: `Product with id ${err.val} not found!!`,
      errorType: `CastError`,
    };
    error = new ErrorResponse(message, 404);
  }
  //mongoose  duplicate error
  if (err.code === 11000) {
    const message = `${err.keyValue.name} is already taken`;
    errorType = `NonUnique`;
    errorField = { field: err.keyValue.name, fieldMessage: message };

    error = new ErrorResponse(message, 403);
  }
  if (err.name === "ValidationError") {
    const message = err._message;
    error = new ErrorResponse(message, 403);
    errorType = "ValidationError";
    errorField = Object.values(err.errors).map((val) => ({
      field: val.path,
      fieldMessage: val.message,
    }));
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error:
      {
        errorMessage: error.message,
        errorType: errorType,
        errorField: errorField,
      } || "Server Error!!",
  });
};
module.exports = errorHandler;
