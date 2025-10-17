import { Request, Response } from "express";
import { handleCreateUser } from "../services/user-service";

const getHomepage = (req: Request, res: Response) => {
  res.render("home.ejs");
};

const getCreatUserPage = (req: Request, res: Response) => {
  res.render("create-user.ejs");
};

const postCreateUser = (req: Request, res: Response) => {
  const { fullName, email, address } = req.body;
  // handleCreateUser
  handleCreateUser(fullName, email, address);
  res.redirect("/");
};

export { getHomepage, getCreatUserPage, postCreateUser };
