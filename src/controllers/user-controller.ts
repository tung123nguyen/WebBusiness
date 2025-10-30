import { Request, Response } from "express";

const getHomepage = async (req: Request, res: Response) => {
  res.render("client/home/show.ejs");
};

export { getHomepage };
