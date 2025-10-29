import {
  deleteUser,
  getAllRole,
  getAllUser,
  getUserById,
  handleCreateUser,
  handleUpdateUser,
} from "@/services/service";
import { Request, Response } from "express";

const getDashboardPage = async (req: Request, res: Response) => {
  res.render("admin/dashboard/dashboard.ejs");
};

const getAdminUserPage = async (req: Request, res: Response) => {
  const users = await getAllUser();
  res.render("admin/user/show.ejs", { users: users });
};

const getAdminProductPage = async (req: Request, res: Response) => {
  res.render("admin/product/show.ejs");
};

const getAdminOrderPage = async (req: Request, res: Response) => {
  res.render("admin/order/show.ejs");
};

const getViewUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserById(id);
  const roles = await getAllRole();
  res.render("admin/user/details.ejs", {
    user: user,
    roles: roles,
  });
};

const postUpdateUser = async (req: Request, res: Response) => {
  // const { fullName, username, password, phone, role, address } = req.body;
  // const file = req.file;
  // const avatar = file?.filename ?? null;
  // await handleUpdateUser(
  //   id,
  //   fullName,
  //   username,
  //   password,
  //   phone,
  //   role,
  //   address,
  //   avatar
  // );
};

const getAdminCreateUser = async (req: Request, res: Response) => {
  const roles = await getAllRole();
  res.render("admin/user/create.ejs", {
    roles: roles,
  });
};

const postAdminCreateUser = async (req: Request, res: Response) => {
  const { fullName, username, password, phone, role, address } = req.body;
  const file = req.file;
  const avatar = file?.filename ?? null;

  await handleCreateUser(
    fullName,
    username,
    password,
    phone,
    role,
    address,
    avatar
  );
  res.redirect("/admin/user");
};

const postAdminDeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUser(id);
  res.redirect("/admin/user");
};

export {
  getDashboardPage,
  getAdminUserPage,
  getAdminProductPage,
  getAdminOrderPage,
  getAdminCreateUser,
  postAdminCreateUser,
  postAdminDeleteUser,
  getViewUser,
  postUpdateUser,
};
