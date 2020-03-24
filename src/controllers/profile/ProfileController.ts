import {
  Controller,
  Get,
  bodyValidator,
  Post,
  use,
  Delete,
  Put
} from "../../decorators";
import { Request, Response } from "express";
import { FindProfile } from "../../database/profile/FindProfile";
import { IProfile } from "../../models/Profile";
import { CreateProfile } from "../../database/profile/CreateProfile";
import {
  checkUserProfile,
  checkProfile
} from "../../middlewares/checkUserProfile/checkUserProfile";
import { DeleteProfile } from "../../database/profile/DeleteProfile";
import { EditProfile } from "../../database/profile/EditProfile";

const findProfile = new FindProfile();
const createNewProfile = new CreateProfile();
const deleteUserProfile = new DeleteProfile();
const editUserProfile = new EditProfile();

@Controller("/profiles")
class ProfileController {
  // Get Profile
  @Get("/")
  async getProfiles(req: Request, res: Response): Promise<Response> {
    try {
      res.redirect("profiles/perPage=20&page=1");
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
    }
  }

  //   Get Profiles With Page Details
  @Get("/perPage=:perPage&page=:page")
  async getProfilesWithPages(req: Request, res: Response): Promise<Response> {
    try {
      const { perPage, page } = req.params;

      const allProfile: IProfile[] = await findProfile.findAllProfiles(
        parseInt(perPage),
        parseInt(page)
      );
      return res.status(200).json(allProfile);
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
    }
  }

  //   Create Profile
  @Post("/")
  @bodyValidator("firstName", "lastName", "image", "user")
  @use(checkUserProfile)
  async createProfile(req: Request, res: Response): Promise<Response> {
    const body = req.body;

    try {
      const newProfile = await createNewProfile.saveProfileInDatabase(body);
      return res.status(201).json({ data: newProfile });
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
    }
  }

  //   Edit Profile
  @Put("/:id")
  @use(checkProfile)
  @bodyValidator()
  async editProfile(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const body = req.body;
      delete body._id;

      const editedProfile = await editUserProfile.ediProfile(id, body);

      return res.status(200).json(editedProfile);
    } catch (err) {
      console.error(err.mesage);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
    }
  }

  // Delete Profile
  @Delete("/:id")
  @use(checkProfile)
  async deleteProfile(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const response = await deleteUserProfile.deleteProfile(id);
      if (response) {
        return res.status(200).json({ data: [{ msg: "Profile Deleted" }] });
      }
      return res
        .status(400)
        .json({ data: [{ msg: "Some thing wend wrong please try again" }] });
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error" }] });
    }
  }
}
