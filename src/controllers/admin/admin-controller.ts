import { getAllUser } from "@/services/user-service";
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
  res.render("admin/user/create.ejs");
};

export {
  getDashboardPage,
  getAdminUserPage,
  getAdminProductPage,
  getAdminOrderPage,
  getAdminCreateUser,
};
