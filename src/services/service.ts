import { prisma } from "@/config/client";

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
  phone: string,
  role: string,
  address: string,
  avatar: string
) => {
  await prisma.user.create({
    data: {
      fullName: fullName,
      username: username,
      password: password,
      phone: phone,
      accountType: role,
      address: address,
      avatar: avatar,
    },
  });
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
