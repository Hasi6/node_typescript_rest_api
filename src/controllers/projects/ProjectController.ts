import { Request, Response, request, response } from "express";
import { Controller, Post, bodyValidator } from "../../decorators";
import Multer from "../../services/multer/multer";
import { CreateProject } from "../../database/project/AddProject";

const createProject = new CreateProject();

const multer: Multer = new Multer();

@Controller("/projects")
class ProjectController {
  // Add Projects
  @Post("/")
  async addProject(req: Request, res: Response): Promise<void> {
    try {
      await multer.upload(req, res, async err => {
        await createProject.addProject(req);
      });

      res.json();
    } catch (err) {
      console.error(err.message);
    }
  }
}
