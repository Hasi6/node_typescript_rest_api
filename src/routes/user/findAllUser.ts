import { Request, Response } from "express";
import { FindUser } from "../../database/user/FindUser";

const findUser = new FindUser();

export const findAllUsersRoute = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { perPage, page } = req.params;
    const users = await findUser.findAllUsers(
      parseInt(perPage),
      parseInt(page)
    );
    return res.status(200).json({ users });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
  }
};

export const findDefaultUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const perPage = 20;
    const page = 1;
    const users = await findUser.findAllUsers(perPage, page);
    return res.status(200).json({ users });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
  }
};
