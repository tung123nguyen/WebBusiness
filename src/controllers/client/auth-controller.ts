import { Request, Response } from "express";
const getLoginPage = async (req: Request, res: Response) => {
  res.render("client/auth/login.ejs");
};

export { getLoginPage };
