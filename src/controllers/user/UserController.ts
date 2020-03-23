import { Request, Response, NextFunction } from "express";
import {
  Get,
  Post,
  Put,
  Delete,
  Controller,
  use,
  bodyValidator
} from "../../decorators";
import { DeleteUser, SaveUser, FindUser, EditUser } from "../../database";
import { serverErrors } from "../../decorators/errors/serverErrors";

const findUser = new FindUser();
const removeUser = new DeleteUser();
const saveUser = new SaveUser();
const editUser = new EditUser();

@Controller("/users")
class UserController {
  // Default Users With Pagination

  @Get("/")
  async getUsers(req: Request, res: Response): Promise<Response> {
    try {
      const perPage = 20;
      const page = 1;
      const users = await findUser.findAllUsers(perPage, page);
      return res.status(200).json(users);
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
    }
  }

  //   Get User with Pagination
  @Get("/perPage=:perPage&page=:page")
  async getUsersWithPagination(req: Request, res: Response): Promise<Response> {
    try {
      const { perPage, page } = req.params;
      const users = await findUser.findAllUsers(
        parseInt(perPage),
        parseInt(page)
      );
      return res.status(200).json(users);
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
    }
  }

  //   Add User
  @Post("/")
  @bodyValidator("email", "firstName", "gender", "age", "height")
  async addUser(req: Request, res: Response): Promise<Response> {
    const { email, firstName, image, age, height, gender } = req.body;
    if (gender !== "male" && gender !== "female" && gender !== "other") {
      return res.status(404).json({
        errors: [{ msg: "Gender is Invalid, Enter male, female or other" }]
      });
    }

    try {
      const user = await findUser.findUserByEmail(email);

      // If User Found On That Email Send Email Found Message
      if (user) {
        return res
          .status(404)
          .json({ errors: [{ msg: "Email Already Taken" }] });
      }

      const newUser: any = {
        email,
        age,
        firstName,
        image,
        height: parseFloat(height),
        gender
      };

      const response = await saveUser.saveUserInDatabase(newUser);
      return res.status(201).json({ newUser: response });
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
    }
  }

  //   Edit User
  @Put("/:id")
  async ediUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const body = req.body;

      const { gender } = body;

      delete body.email;
      delete body._id;

      if (gender !== "male" && gender !== "female" && gender !== "other") {
        return res.status(404).json({
          errors: [{ msg: "Gender is Invalid, Enter male, female or other" }]
        });
      }

      const user = await findUser.findUserById(id);

      if (!user) {
        return res.status(404).json({ errors: [{ msg: "Invalid User Id" }] });
      }

      const editedUser = await editUser.editUser(id, body);
      return res.status(200).json({ editedUser });
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
    }
  }

  //   Delete User
  @Delete("/:id")
  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      let message = "User Deleted";
      const { id } = req.params;

      const user = await findUser.findUserById(id);

      if (!user) {
        return res.status(404).json({ errors: [{ msg: "Invalid User Id" }] });
      }
      const isDeleted = await removeUser.deleteUserById(id);

      if (!isDeleted) {
        message = "Something went wrong, Please Try Again later";
      }

      return res.status(200).json({ message });
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
    }
  }
}
