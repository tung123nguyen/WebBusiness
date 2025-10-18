import { getConnection } from "config/database";
import { prisma } from "config/prisma-connection";

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
export { handleCreateUser, getAllUser };
