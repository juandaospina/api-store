const boom = require("@hapi/boom");

// si el middleware es para control de errores, debe recibir siempre los 4 parámetros
function logErrors(error, request, response, next) {
  console.error("ERROR_LOG", error);
  // al enviar el error como parámetro permite que llegue a un nuevo middleware
  // del mismo tipo, si no se pasa el error como argumento pasa a cualquier tipo de middleware
}

function errorHandler(error, request, response, next) {
  console.log("[ERROR_HANDLER]", error);
  // console.log("[errorHandler function]", {error, request, response, next});
  response.status(500).json({
    message: error.message,
    stack: error.stack,
    error: error,
  });
  next(error);
}

function querysErrorHandler(error, request, response, next) {
  console.log("[ERROR_QUERY_HANDLER]", error);
  if (!!error.errors) {
    const { fields, parent } = error;
    response.status(400).json({
      message: parent.detail,
      field: fields
    });
  }
  next(error);
}

function boomErrorHandler(error, request, response, next) {
  if (error.isBoom) {
    const {
      output: { statusCode, payload },
    } = error;
    return response.status(statusCode).json(payload);
  }
  next(error);
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
  querysErrorHandler,
};
