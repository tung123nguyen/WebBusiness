import { prisma } from "@/config/client";

const handleCreateProduct = async (
  name: string,
  price: number,
  detailDesc: string,
  shortDesc: string,
  quantity: number,
  factory: string,
  target: string,
  image: string
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
      image,
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

const updateProduct = async (
  id: string,
  name: string,
  price: number,
  detailDesc: string,
  shortDesc: string,
  quantity: number,
  factory: string,
  target: string,
  image: string
) => {
  return await prisma.product.update({
    where: {
      id: +id,
    },
    data: {
      name,
      price: +price,
      detailDesc,
      shortDesc,
      quantity: +quantity,
      factory,
      target,
      ...(image !== undefined && { image: image }),
    },
  });
};

const getProductById = async (id: string) => {
  return await prisma.product.findUnique({
    where: {
      id: +id,
    },
  });
};

export { handleCreateProduct, getProductList, deleteProduct, updateProduct, getProductById };
