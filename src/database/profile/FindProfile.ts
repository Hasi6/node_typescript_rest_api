import { model } from "mongoose";
import { IProfile, ProfileType } from "../../models/Profile";

const Profile = model<ProfileType>("profile");

export class FindProfile {
  // find Profile by Id
  findProfileById = async (id: string): Promise<IProfile | null> => {
    try {
      const user: IProfile | null = await Profile.findById(id).populate(
        "user",
        ["username", "nickName", "height", "gender", "email", "image"]
      );
      return user;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  };

  //   Find Profile By UserId
  findProfileByUserId = async (user: String): Promise<IProfile | null> => {
    try {
      const profile: IProfile | null = await Profile.findOne({
        user
      }).populate("user", [
        "username",
        "nickName",
        "height",
        "gender",
        "email",
        "image"
      ]);
      return profile;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  };

  //   Get Profiles with Pagination
  findAllProfiles = async (perPage: number, page: number): Promise<any> => {
    try {
      const numberOfProfiles: number = await Profile.find().countDocuments();
      const pages: number = Math.ceil(numberOfProfiles / perPage);
      let msg = `Only ${pages} pages found`;
      if (pages < page) {
        if (page === 1) {
          msg = "No Profiles found";
        }
        return { msg };
      }

      const profiles = await Profile.find()
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

      return { profiles, numberOfProfiles, pages, currentPage: page };
    } catch (err) {
      console.error(err.message);
      return [];
    }
  };
}
