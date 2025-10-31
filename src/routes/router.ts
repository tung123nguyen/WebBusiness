import express from "express";
import { Express } from "express";
import { getHomepage } from "controllers/user-controller";
import {
  getAdminOrderPage,
  getAdminUserPage,
  getCreateUser,
  getDashboardPage,
  getViewUser,
  postCreateUser,
  postDeleteUser,
  postUpdateUser,
} from "@/controllers/admin/user-controller";
import fileUploadMiddleware from "@/middleware/multer";
import { getProductPage } from "@/controllers/product/product-controller";
import { getAdminProductPage, getCreateProductPage, postCreateProduct } from "@/controllers/admin/product-controller";

const webRoute = (app: Express) => {
  const router = express.Router();
  // user route
  router.get("/", getHomepage);
  router.get("/product/:id", getProductPage);
  /////////////////////////
  ////// admin route /////
  ///////////////////////
  router.get("/admin/", getDashboardPage);
  router.get("/admin/user", getAdminUserPage);
  router.get("/admin/create-user", getCreateUser);
  router.get("/admin/view-user/:id", getViewUser);
  router.post("/admin/create-user", fileUploadMiddleware("avatar"), postCreateUser);
  router.post("/admin/update-user", fileUploadMiddleware("avatar"), postUpdateUser);
  router.post("/admin/delete-user/:id", postDeleteUser);

  router.get("/admin/product", getAdminProductPage);
  router.get("/admin/create-product", getCreateProductPage);
  router.post("/admin/create-product", fileUploadMiddleware("image", "images/product"), postCreateProduct);
  router.get("/admin/order", getAdminOrderPage);

  app.use("/", router);
};

export default webRoute;
