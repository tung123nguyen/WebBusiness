import express from "express";
import webRoute from "@/routes/router";
import { initDatabase } from "@/config/seed";

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

// getConnection();
// seeding data
initDatabase();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
