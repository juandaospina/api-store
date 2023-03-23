function globalRequest(request, response, next) {
    console.log("[GLOBAL_REQUEST]", request.method);
    next();
}

module.exports = { globalRequest }