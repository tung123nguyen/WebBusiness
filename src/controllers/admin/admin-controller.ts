import {
  getAllRole,
  getAllUser,
  getUserById,
  handleCreateUser,
  handleDeleteUser,
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
  res.render("admin/product/product.ejs");
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

const getCreateUser = async (req: Request, res: Response) => {
  const roles = await getAllRole();
  res.render("admin/user/create.ejs", {
    roles: roles,
  });
};

const postCreateUser = async (req: Request, res: Response) => {
  const { fullName, username, password, phone, role, address } = req.body;
  const file = req.file;
  const avatar = file?.filename ?? null;

  await handleCreateUser(fullName, username, password, phone, role, address, avatar);
  res.redirect("/admin/user");
};

const postUpdateUser = async (req: Request, res: Response) => {
  const { id, fullName, phone, role, address } = req.body;
  const file = req.file;
  const avatar = file?.filename ?? undefined;
  await handleUpdateUser(id, fullName, phone, role, address, avatar);
  return res.redirect("/admin/user");
};

const postDeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await handleDeleteUser(id);
  res.redirect("/admin/user");
};

export {
  getDashboardPage,
  getAdminUserPage,
  getAdminProductPage,
  getAdminOrderPage,
  getCreateUser,
  postCreateUser,
  postDeleteUser,
  getViewUser,
  postUpdateUser,
};
