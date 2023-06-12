import express from "express";
import homeController from "../controllers/homeController";


let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);

  router.get("/hehe", homeController.getHomePage);
  router.post('/order', )
  return app.use("/", router);
};

module.exports = initWebRoutes;
