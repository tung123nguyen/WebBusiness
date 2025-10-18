import { Request, Response } from "express";
import { getAllUser, handleCreateUser } from "../services/user-service";

const getHomepage = async (req: Request, res: Response) => {
  const users = await getAllUser();
  res.render("home.ejs", { users: users });
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
