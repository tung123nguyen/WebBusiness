import { getProductById } from "@/services/client/item-service";
import { Request, Response } from "express";
const getProductPage = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getProductById(+id);
  res.render("client/product/detail.ejs", { product });
};

export { getProductPage };
