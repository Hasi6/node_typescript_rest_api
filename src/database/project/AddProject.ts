import { model } from "mongoose";
import { ProjectType, IProject } from "../../models/Project";

const Project = model<ProjectType>("project");

export class CreateProfile {
  // Save Project In Database
  saveProjectInDatabase = async (
    project: IProject
  ): Promise<IProject | null> => {
    try {
      const newProject = new Project(project);
      await newProject.save();
      return newProject;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  };
}
