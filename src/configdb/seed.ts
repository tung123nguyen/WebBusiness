import { prisma } from "@/configdb/client";

const initDatabase = async () => {
  const countUser = await prisma.user.count();
  const countRole = await prisma.role.count();
  if (countUser === 0) {
    await prisma.user.createMany({
      data: [
        {
          name: "hoang",
          email: "hoang@gmail.com",
          address: "hanoi",
        },
      ],
    });
  }
  if (countRole === 0) {
    await prisma.role.createMany({
      data: [
        {
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
};

export { initDatabase };
