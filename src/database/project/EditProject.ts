import { model } from "mongoose";
import { ProjectType, IProject } from "../../models/Project";
import { FindProjects } from "./GetProjects";

const findProject = new FindProjects();

const Project = model<ProjectType>("project");

export class EditProject {
  // Edit User
  editProject = async (
    _id: string,
    body: IProject
  ): Promise<IProject | null> => {
    try {
      await Project.updateOne({ _id }, { $set: body });

      const project = await findProject.findProjectById(_id);

      return project;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  };
}
