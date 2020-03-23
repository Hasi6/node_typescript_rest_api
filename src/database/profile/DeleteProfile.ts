import { model } from "mongoose";
import { ProfileType } from "../../models/Profile";

const Profile = model<ProfileType>("profile");

export class DeleteProfile {
  // Delete Profile
  deleteProfile = async (id: string): Promise<boolean> => {
    try {
      await Profile.findByIdAndDelete(id);
      return true;
    } catch (err) {
      console.error(err.message);
      return false;
    }
  };
}
