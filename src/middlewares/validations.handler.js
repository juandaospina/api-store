const boom = require("@hapi/boom");

// middleware validación de datos, recibe 2 parámetros, el esquema de información {...} y property "query", "params", "body"
function validationsHandler(schema, property) {
  return (request, response, next) => {
    // el request es un objeto de { params, query, body }, de esta forma obtenemos los valores
    // a través de la property pasada ej: request["params"] ~ { params: { id: "81982-2982-8282"}}
    const data = request[property];
    const { error } = schema.validate(data);
    if (error) next(boom.badRequest(error));
    next();
  };
}

module.exports = { validationsHandler };
