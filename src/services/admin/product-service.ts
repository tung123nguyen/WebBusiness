import { prisma } from "@/config/client";

const handleCreateProduct = async (
  name: string,
  price: number,
  detailDesc: string,
  shortDesc: string,
  quantity: number,
  factory: string,
  target: string
) => {
  return await prisma.product.create({
    data: {
      name,
      price,
      detailDesc,
      shortDesc,
      quantity,
      factory,
      target,
    },
  });
};

const getProductList = async () => {
  return await prisma.product.findMany();
};

const deleteProduct = async (id: string) => {
  return await prisma.product.delete({
    where: {
      id: +id,
    },
  });
};

export { handleCreateProduct, getProductList, deleteProduct };
