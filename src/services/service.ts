import { getConnection } from "src/configdb/database";
import { prisma } from "@/configdb/client";

const getAllUser = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const getAllRole = async () => {
  const roles = await prisma.role.findMany();
  return roles;
};

const handleCreateUser = async (
  fullName: string,
  username: string,
  password: string,
  address: string,
  phone: string
) => {
  // const newUser = await prisma.user.create({
  //   data: {
  //     fullName: fullName,
  //     username: username,
  //     password: password,
  //     address: address,
  //     phone: phone,
  //   },
  // });
  // return newUser;
};

const deleteUser = async (id: string) => {
  const deleteUser = await prisma.user.delete({
    where: {
      id: +id,
    },
  });
  return deleteUser;
};

export { handleCreateUser, getAllUser, deleteUser, getAllRole };
