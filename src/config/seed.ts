import { prisma } from "@/config/client";

const initDatabase = async () => {
  const countUser = await prisma.user.count();
  const countRole = await prisma.role.count();
  if (countRole === 0) {
    await prisma.role.createMany({
      data: [
        {
          id: 1,
          name: "ADMIN",
          description: "day la admin",
        },
        {
          name: "USER",
          description: "day la user",
        },
      ],
    });
  }
  if (countUser === 0) {
    await prisma.user.createMany({
      data: [
        {
          fullName: "oke",
          username: "oke",
          password: "oke",
          phone: "oke",
          accountType: "ADMIN",
          avatar: null,
          address: "123",
          roleId: 1,
        },
      ],
    });
  }
};

export { initDatabase };
