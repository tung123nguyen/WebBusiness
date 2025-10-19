import express from "express";
import webRoute from "routes/web";
import { getConnection } from "src/configdb/database";
const app = express();
const PORT = process.env.PORT;

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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
