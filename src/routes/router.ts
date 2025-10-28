import express from "express";
import { Express } from "express";
import {
  getCreatUserPage,
  getHomepage,
  postCreateUser,
  postDeleteUser,
} from "controllers/user-controller";
import {
  getAdminCreateUser,
  getAdminOrderPage,
  getAdminProductPage,
  getAdminUserPage,
  getDashboardPage,
  postAdminCreateUser,
  postAdminDeleteUser,
} from "@/controllers/admin/admin-controller";
import fileUploadMiddleware from "@/middleware/multer";

const webRoute = (app: Express) => {
  const router = express.Router();
  // user route
  router.get("/", getHomepage);
  router.get("/create-user", getCreatUserPage);
  router.post("/create-user", postCreateUser);
  router.post("/delete-user/:id", postDeleteUser);

  /////////////////////////
  ////// admin route /////
  ///////////////////////
  router.get("/admin/", getDashboardPage);
  router.get("/admin/user", getAdminUserPage);
  router.get("/admin/create-user", getAdminCreateUser);
  router.post(
    "/admin/create-user",
    fileUploadMiddleware("avatar"),
    postAdminCreateUser
  );
  router.post("/admin/delete-user/:id", postAdminDeleteUser);
  router.get("/admin/product", getAdminProductPage);
  router.get("/admin/order", getAdminOrderPage);

  app.use("/", router);
};

export default webRoute;
