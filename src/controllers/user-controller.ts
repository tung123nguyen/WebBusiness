import { getProduct } from "@/services/client/item-service";
import { Request, Response } from "express";

const getHomepage = async (req: Request, res: Response) => {
  const products = await getProduct();
  res.render("client/home/show.ejs", { products });
};

export { getHomepage };
