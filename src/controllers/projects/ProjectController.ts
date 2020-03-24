import { Request, Response, request, response } from "express";
import {
  Controller,
  Post,
  bodyValidator,
  use,
  Get,
  Delete,
  Put
} from "../../decorators";
import Multer from "../../services/multer/multer";
import { CreateProject } from "../../database/project/AddProject";
import axios from "axios";
import { FindProjects } from "../../database/project/GetProjects";
import { checkProject } from "../../middlewares/checkProject/checkProject";
import { DeleteProject } from "../../database/project/DeleteProject";
import { EditProject } from "../../database/project/EditProject";

const createProject = new CreateProject();
const findProjects = new FindProjects();
const deleteProjects = new DeleteProject();
const editProject = new EditProject();
const multer: Multer = new Multer();

@Controller("/projects")
class ProjectController {
  // Get Projects
  @Get("/")
  async getProjects(req: Request, res: Response): Promise<void | Response> {
    try {
      res.redirect("projects/perPage=20&page=1");
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
    }
  }

  @Get("/:id")
  @use(checkProject)
  async getProject(req: Request, res: Response): Promise<Response> {
    try {
      const project = await findProjects.findProjectById(req.params.id);
      return res.status(200).json({ data: project });
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
    }
  }

  @Get("/perPage=:perPage&page=:page")
  async getProjectsPagination(req: Request, res: Response): Promise<Response> {
    try {
      const { page, perPage } = req.params;
      const projects = await findProjects.findAllProjects(
        parseInt(perPage),
        parseInt(page)
      );
      return res.status(200).json({ data: projects });
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
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

  //   Edit Project
  @Put("/:id")
  @use(checkProject)
  async editProjetc(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body;
      delete body._id;

      const editedProject = await editProject.editProject(req.params.id, body);

      return res.status(200).json({ data: editedProject });
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
    }
  }
  //   Delete Project
  @Delete("/:id")
  @use(checkProject)
  async deleteProfile(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const response = await deleteProjects.deleteProject(id);

      if (!response) {
        return res
          .status(400)
          .json({ data: [{ msg: "Something went wrong" }] });
      }

      return res.status(200).json({ data: [{ msg: "Profile Deleted" }] });
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
    }
  }
}
