import { prisma } from "@/config/client";
import bcrypt from "bcrypt";
const getAllUser = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: +id,
    },
  });
  return user;
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
  const defaultPassword = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: {
      fullName: fullName,
      username: username,
      password: defaultPassword,
      phone: phone,
      accountType: role,
      address: address,
      avatar: avatar,
      roleId: +role,
    },
  });
};

const handleUpdateUser = async (
  id: string,
  fullName: string,
  phone: string,
  role: string,
  address: string,
  avatar: string
) => {
  await prisma.user.update({
    where: {
      id: +id,
    },
    data: {
      fullName,
      phone,
      roleId: +role,
      address,
      ...(avatar !== undefined && { avatar: avatar }),
    },
  });
};

const handleDeleteUser = async (id: string) => {
  const deleteUser = await prisma.user.delete({
    where: {
      id: +id,
    },
  });
  return deleteUser;
};

export {
  handleCreateUser,
  getAllUser,
  handleDeleteUser,
  getAllRole,
  getUserById,
  handleUpdateUser,
};
