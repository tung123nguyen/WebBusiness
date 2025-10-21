import { Request, Response } from "express";
import { deleteUser, getAllUser, handleCreateUser } from "@/services/service";

const getHomepage = async (req: Request, res: Response) => {
  const users = await getAllUser();
  res.render("home.ejs", { users: users });
};

const getCreatUserPage = (req: Request, res: Response) => {
  res.render("create-user.ejs");
};

const postCreateUser = async (req: Request, res: Response) => {
  const { name, email, address } = req.body;
  // await handleCreateUser(name, email, address);
  res.redirect("/");
};

const postDeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUser(id);
  res.redirect("/");
};

export { getHomepage, getCreatUserPage, postCreateUser, postDeleteUser };
