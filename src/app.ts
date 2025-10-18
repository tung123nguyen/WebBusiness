import express from "express";
import webRoute from "routes/web";
import { getConnection } from "config/database";
const app = express();
const port = 8080;

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// config view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
// config webRoute
webRoute(app);
// config static file
app.use(express.static("public"));

getConnection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
