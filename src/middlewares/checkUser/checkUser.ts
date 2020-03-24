import { Request, Response, NextFunction } from "express";
import { FindUser } from "../../database";

const findUser = new FindUser();

export async function checkUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    console.log(req.body);
    const user = await findUser.findUserById(req.body.user);

    if (!user) {
      res.status(400).json({
        errors: [{ msg: "Invalid User" }]
      });
      return;
    }
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
    return;
  }
}
