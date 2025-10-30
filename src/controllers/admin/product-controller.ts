import { Request, Response } from "express";

const getCreateProductPage = (req: Request, res: Response) => {
  res.render("admin/product/create-product.ejs");
};

const postCreateProduct = (req: Request, res: Response) => {
  res.redirect("/admin/product");
};

export { getCreateProductPage, postCreateProduct };
