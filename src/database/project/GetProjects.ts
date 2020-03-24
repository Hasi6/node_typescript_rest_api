import { model } from "mongoose";
import { IProject, ProjectType } from "../../models/Project";

const Project = model<ProjectType>("project");

export class FindProjects {
  // Find Project by Id
  findProjectById = async (id: string): Promise<IProject | null> => {
    try {
      const project: IProject | null = await Project.findById(
        id
      ).populate("user", [
        "username",
        "nickName",
        "height",
        "gender",
        "email",
        "image"
      ]);
      return project;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  };

  //   Find Profile By UserId
  findProjectByUserId = async (user: string): Promise<IProject[]> => {
    try {
      const project: IProject[] = await Project.find({
        user
      }).populate("user", [
        "username",
        "nickName",
        "height",
        "gender",
        "email",
        "image"
      ]);
      return project;
    } catch (err) {
      console.error(err.message);
      return [];
    }
  };

  //   Get Profiles with Pagination
  findAllProjects = async (perPage: number, page: number): Promise<any> => {
    try {
      const numberOfProjects: number = await Project.find().countDocuments();
      const pages: number = Math.ceil(numberOfProjects / perPage);
      let msg = `Only ${pages} pages found`;
      if (pages < page) {
        if (page === 1) {
          msg = "No Profiles found";
        }
        return { msg };
      }

      const projects = await Project.find()
        .sort({ createdAt: -1 })
        .populate("user", [
          "username",
          "nickName",
          "height",
          "gender",
          "email",
          "image"
        ])
        .skip(Math.abs(perPage * page - perPage))
        .limit(perPage);

      return { projects, numberOfProjects, pages, currentPage: page };
    } catch (err) {
      console.error(err.message);
      return [];
    }
  };
}
