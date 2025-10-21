import { deleteUser, getAllRole, getAllUser } from "@/services/service";
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

const getAdminCreateUser = async (req: Request, res: Response) => {
  const roles = await getAllRole();
  res.render("admin/user/create.ejs", {
    roles: roles,
  });
};

const postAdminCreateUser = async (req: Request, res: Response) => {
  const { fullName, username, address, phone } = req.body;
  // await handleCreateUser();
  res.redirect("/admin");
};

const postAdminDeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUser(id);
  res.redirect("/admin");
};

export {
  getDashboardPage,
  getAdminUserPage,
  getAdminProductPage,
  getAdminOrderPage,
  getAdminCreateUser,
  postAdminCreateUser,
  postAdminDeleteUser,
};
