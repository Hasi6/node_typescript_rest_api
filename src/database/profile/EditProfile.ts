import { model } from "mongoose";
import { ProfileType, IProfile } from "../../models/Profile";
import { FindProfile } from "./FindProfile";

const Profile = model<ProfileType>("profile");
const findProfile = new FindProfile();

export class EditProfile {
  // Edit User
  ediProfile = async (
    _id: string,
    body: IProfile
  ): Promise<IProfile | null> => {
    try {
      await Profile.updateOne({ _id }, { $set: body });

      const profile = await findProfile.findProfileById(_id);
      return profile;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  };
}
