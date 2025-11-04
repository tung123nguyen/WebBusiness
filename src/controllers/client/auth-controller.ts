import { Request, Response } from "express";

const getLoginPage = async (req: Request, res: Response) => {
  res.render("client/auth/login.ejs");
};

const getRegisterPage = async (req: Request, res: Response) => {
  res.render("client/auth/register.ejs");
};

export { getLoginPage, getRegisterPage };
