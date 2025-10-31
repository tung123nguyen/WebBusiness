import { ProductSchema, TProductSchema } from "@/validation/product-schema";
import { log } from "console";
import { Request, Response } from "express";

const getCreateProductPage = (req: Request, res: Response) => {
  const errors = [];
  const oldValue = {};
  res.render("admin/product/create-product.ejs", { errors: errors, oldValue });
};

const postCreateProduct = (req: Request, res: Response) => {
  const { name, price, detailDesc, shortDesc, quantity, factory, target } = req.body as TProductSchema;
  const validate = ProductSchema.safeParse(req.body);

  if (!validate.success) {
    // error
    const errorZod = validate.error.issues;
    const errors = errorZod?.map((item) => `${item.message} (${item.path[0]})`);
    const oldValue = { name, price, detailDesc, shortDesc, quantity, factory, target };
    res.render("admin/product/create-product.ejs", { errors, oldValue });
  }
  // success
  else res.redirect("/admin/product");
};

export { getCreateProductPage, postCreateProduct };
