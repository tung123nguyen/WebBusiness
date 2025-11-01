import { deleteProduct, getProductList, handleCreateProduct } from "@/services/admin/product-service";
import { ProductSchema, TProductSchema } from "@/validation/product-schema";
import { Request, Response } from "express";

const getAdminProductPage = async (req: Request, res: Response) => {
  const products = await getProductList();
  res.render("admin/product/product.ejs", { products });
};

const getCreateProductPage = (req: Request, res: Response) => {
  const errors = [];
  const oldValue = {};
  res.render("admin/product/create-product.ejs", { errors: errors, oldValue });
};

const postCreateProduct = async (req: Request, res: Response) => {
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
  else {
    await handleCreateProduct(name, +price, detailDesc, shortDesc, +quantity, factory, target);
    res.redirect("/admin/product");
  }
};

const postDeleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteProduct(id);
  res.redirect("/admin/product");
};

export { getAdminProductPage, getCreateProductPage, postCreateProduct, postDeleteProduct };
