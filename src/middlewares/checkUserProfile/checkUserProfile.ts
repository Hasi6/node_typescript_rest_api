import { Request, Response, NextFunction } from "express";
import { FindProfile } from "../../database/profile/FindProfile";

const findProfile = new FindProfile();

export async function checkUserProfile(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const profile = await findProfile.findProfileByUserId(req.body.user);

    if (profile) {
      res.status(400).json({
        errors: [
          { msg: "This User Have Profile, User cannot create two Profiles" }
        ]
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

export async function checkProfile(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const profile = await findProfile.findProfileById(req.params.id);

    if (!profile) {
      res.status(400).json({
        errors: [{ msg: "No Profile Found on that id" }]
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
