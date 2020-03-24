import { IProject, ProjectType } from "../../models/Project";
import { model } from "mongoose";

const Project = model<IProject>("project");

export class DeleteProject {
  // Delete Project By id
  deleteProject = async (id: string): Promise<boolean> => {
    try {
      await Project.findByIdAndDelete(id);
      return true;
    } catch (err) {
      console.error(err.message);
      return false;
    }
  };
}
