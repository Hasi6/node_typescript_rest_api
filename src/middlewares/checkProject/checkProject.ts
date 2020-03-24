import { Request, Response, NextFunction } from "express";
import { FindProjects } from "../../database/project/GetProjects";

const findPorject = new FindProjects();

export async function checkProject(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const project = await findPorject.findProjectById(req.params.id);

    if (!project) {
      res.status(400).json({
        errors: [{ msg: "Id invalid cannot find the project" }]
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

// export async function checkProfile(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> {
//   try {
//     const profile = await findProfile.findProfileById(req.params.id);

//     if (!profile) {
//       res.status(400).json({
//         errors: [{ msg: "No Profile Found on that id" }]
//       });
//       return;
//     }
//     next();
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
//     return;
//   }
// }
