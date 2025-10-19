import { Request, Response } from "express";

const getDashboardPage = async (req: Request, res: Response) => {
  res.render("admin/dashboard");
};

export { getDashboardPage };
