import { Request, Response } from "express";
import { getAllUser, handleCreateUser } from "../services/user-service";

const getHomepage = async (req: Request, res: Response) => {
  const users = await getAllUser();
  res.render("home.ejs", { users: users });
};

const getCreatUserPage = (req: Request, res: Response) => {
  res.render("create-user.ejs");
};

const postCreateUser = async (req: Request, res: Response) => {
  const { name, email, address } = req.body;
  await handleCreateUser(name, email, address);
  res.redirect("/");
};

export { getHomepage, getCreatUserPage, postCreateUser };
