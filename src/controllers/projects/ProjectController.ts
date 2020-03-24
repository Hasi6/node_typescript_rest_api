import { Request, Response, request, response } from "express";
import { Controller, Post, bodyValidator, use, Get } from "../../decorators";
import Multer from "../../services/multer/multer";
import { CreateProject } from "../../database/project/AddProject";
import { checkUser } from "../../middlewares/checkUser/checkUser";

const createProject = new CreateProject();

const multer: Multer = new Multer();

@Controller("/projects")
class ProjectController {
  // Get Projects
  @Get("/")
  async getProjects(req: Request, res: Response): Promise<Response> {
    try {
    } catch (err) {
      console.error(err.message);
    }
  }

  // Add Projects
  @Post("/")
  async addProject(req: Request, res: Response): Promise<void> {
    try {
      await multer.upload(req, res, async err => {
        await createProject.saveProjectInDatabase(req, res);
      });
    } catch (err) {
      console.error(err.message);
    }
  }
}
