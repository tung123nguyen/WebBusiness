import express from "express";
import { Express } from "express";
import {
  getCreatUserPage,
  getHomepage,
  postCreateUser,
  postDeleteUser,
} from "controllers/user-controller";

const webRoute = (app: Express) => {
  const router = express.Router();

  router.get("/", getHomepage);
  router.get("/create-user", getCreatUserPage);
  router.post("/create-user", postCreateUser);
  router.post("/delete-user/:id", postDeleteUser);
  app.use("/", router);
};

export default webRoute;
