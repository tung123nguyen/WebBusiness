import { Request, Response } from "express";

const getDashboardPage = async (req: Request, res: Response) => {
  res.render("admin/dashboard/dashboard.ejs");
};

const getAdminUserPage = async (req: Request, res: Response) => {
  res.render("admin/user/show.ejs");
};

export { getDashboardPage, getAdminUserPage };
