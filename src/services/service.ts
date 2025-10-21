import { getConnection } from "src/configdb/database";
import { prisma } from "@/configdb/client";

const handleCreateUser = async (
  name: string,
  email: string,
  address: string
) => {
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      address: address,
    },
  });
  return newUser;
};

const getAllUser = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const deleteUser = async (id: string) => {
  const deleteUser = await prisma.user.delete({
    where: {
      id: +id,
    },
  });
  return deleteUser;
};

export { handleCreateUser, getAllUser, deleteUser };
