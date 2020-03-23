import { model } from "mongoose";
import { ProfileType, IProfile } from "../../models/Profile";

const Profile = model<ProfileType>("profile");

export class CreateProfile {
  // Save User In Database
  saveProfileInDatabase = async (
    profile: IProfile
  ): Promise<IProfile | null> => {
    try {
      const newProfile = new Profile(profile);
      await newProfile.save();
      return newProfile;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  };
}
