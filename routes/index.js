module.exports = (application) => {
  
    application.get("/api/generate", (req, res) => {
        application.controllers.index.generateRandomNumber(application, req, res);
    });

    application.get("/api/number", (req, res) => {
        application.controllers.index.getNumber(application, req, res);
    });
}