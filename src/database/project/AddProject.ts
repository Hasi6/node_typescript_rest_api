import { model } from "mongoose";
import { ProjectType, IProject } from "../../models/Project";
import { Request, Response } from "express";
import fs from "fs";
import { EditUser } from "../user/EditUser";

const editUser = new EditUser();

const Project = model<ProjectType>("project");

export class CreateProject {
  // Save Project In Database
  async saveProjectInDatabase(
    req: Request,
    res: Response
  ): Promise<Response | null | void> {
    try {
      //   const project = {};
      let image = null;
      if (req.file) {
        image = fs.readFileSync(`./uploads/${req.file.originalname}`);
      }

      const { user, title, description, isCompleted } = req.body;

      if (!user || !title || !description || isCompleted === undefined) {
        res.status(400).json({
          errors: {
            msg:
              "user, title, description, isCompleted: (true or false) required"
          }
        });
        return;
      }

      const project = {
        user,
        title,
        description,
        isCompleted,
        image
      };

      const newProject = new Project(project);
      await newProject.save();

      await editUser.addProject(user, newProject._id);

      return res.status(201).json({ data: newProject });
    } catch (err) {
      console.error(err.message);
      return null;
    }
  }
}
