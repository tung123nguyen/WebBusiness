import {
  deleteProduct,
  getProductById,
  getProductList,
  handleCreateProduct,
  updateProduct,
} from "@/services/admin/product-service";
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
  const file = req.file;
  const image = file?.filename ?? null;
  if (!validate.success) {
    // error
    const errorZod = validate.error.issues;
    const errors = errorZod?.map((item) => `${item.message} (${item.path[0]})`);
    const oldValue = { name, price, detailDesc, shortDesc, quantity, factory, target };
    res.render("admin/product/create-product.ejs", { errors, oldValue });
  }
  // success
  else {
    await handleCreateProduct(name, +price, detailDesc, shortDesc, +quantity, factory, target, image);
    res.redirect("/admin/product");
  }
};

const postDeleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteProduct(id);
  res.redirect("/admin/product");
};

const getProductDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getProductById(id);
  const factoryOptions = [
    { name: "Apple (MacBook)", value: "APPLE" },
    { name: "Asus", value: "ASUS" },
    { name: "Lenovo", value: "LENOVO" },
    { name: "Dell", value: "DELL" },
    { name: "LG", value: "LG" },
    { name: "Acer", value: "ACER" },
  ];

  const targetOptions = [
    { name: "Gaming", value: "GAMING" },
    { name: "Sinh viên - Văn phòng", value: "SINHVIEN-VANPHONG" },
    { name: "Thiết kế đồ họa", value: "THIET-KE-DO-HOA" },
    { name: "Mỏng nhẹ", value: "MONG-NHE" },
    { name: "Doanh nhân", value: "DOANH-NHAN" },
  ];

  res.render("admin/product/product-detail.ejs", { product: product, factoryOptions, targetOptions });
};

const postUpdateProduct = async (req: Request, res: Response) => {
  const { id, name, price, detailDesc, shortDesc, quantity, factory, target } = req.body;
  const file = req.file;
  const image = file?.filename ?? null;
  await updateProduct(id, name, price, detailDesc, shortDesc, quantity, factory, target, image);
  res.redirect("/admin/product");
};

export {
  getAdminProductPage,
  getCreateProductPage,
  postCreateProduct,
  postDeleteProduct,
  getProductDetail,
  postUpdateProduct,
};
