module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const baseUrl = "/api/tutorials";

  /* var router = require("express").Router();
   * app.use('/api/tutorials', router);
   * This is not working for some reason.
   */

  //Create a new Tutorial
  app.post(baseUrl + "/create", tutorials.create);
  //Retrieve all tutorials
  app.get(baseUrl + "/", tutorials.findAll);
};
