import express from "express";
import { Express } from "express";
import { getHomepage } from "controllers/user-controller";
import {
  getAdminCreateUser,
  getAdminOrderPage,
  getAdminProductPage,
  getAdminUserPage,
  getDashboardPage,
  getViewUser,
  postAdminCreateUser,
  postAdminDeleteUser,
  postUpdateUser,
} from "@/controllers/admin/admin-controller";
import fileUploadMiddleware from "@/middleware/multer";

const webRoute = (app: Express) => {
  const router = express.Router();
  // user route
  router.get("/", getHomepage);

  /////////////////////////
  ////// admin route /////
  ///////////////////////
  router.get("/admin/", getDashboardPage);
  router.get("/admin/user", getAdminUserPage);
  router.get("/admin/create-user", getAdminCreateUser);
  router.get("/admin/view-user/:id", getViewUser);
  router.post(
    "/admin/create-user",
    fileUploadMiddleware("avatar"),
    postAdminCreateUser
  );
  router.post(
    "/admin/update-user",
    fileUploadMiddleware("avatar"),
    postUpdateUser
  );
  router.post("/admin/delete-user/:id", postAdminDeleteUser);
  router.get("/admin/product", getAdminProductPage);
  router.get("/admin/order", getAdminOrderPage);

  app.use("/", router);
};

export default webRoute;
