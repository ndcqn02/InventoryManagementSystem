import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import cors from "cors";
import initAPIRoute from "./route/api";
require("dotenv").config();

const app = express();
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

initAPIRoute(app);

let port = process.env.PORT || 9000;
//Port === undefined => port = 9000

app.listen(port, () => {
  //callback
  console.log("Backend Nodejs is running on the port: " + port);
});
