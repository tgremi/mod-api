let app = require("./config/server.js");

//Set the available port or 3000
let server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
console.log(process.env.dbURI)
//Set the available host
let server_host = process.env.YOUR_HOST || '0.0.0.0';

try {
    app.listen(server_port, server_host, () => {
    }).on("error", (error) => {
        console.log("server error =", error);
    }).on("listening", () => {
        console.log("online");
    }).on("request", (request) => {
        console.log("received a new request.");
    });

} catch (error) {
    console.log("Error on crodity-posts, error =", error);
}

//Process events
process.on("uncaughtException", (error) => {
    console.log("Application closing due an uncaughtException...");
    console.log("Error =", error);
});