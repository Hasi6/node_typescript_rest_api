import { model } from "mongoose";
import { UserType, IUser } from "../../models/Users";

const User = model<UserType>("users");

export class FindUser {
  // find User by Id
  findUserById = async (id: string): Promise<IUser | null> => {
    try {
      const user: IUser | null = await User.findById(id);
      return user;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  };

  // Find User By Email
  findUserByEmail = async (email: string): Promise<IUser | null> => {
    try {
      const user: IUser | null = await User.findOne({ email });
      return user;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  };

  // Find All Users with Pagination
  findAllUsers = async (perPage: number, page: number): Promise<any> => {
    try {
      const numberOfUser: number = await User.find().countDocuments();
      const pages: number = Math.ceil(numberOfUser / perPage);

      if (pages < page) {
        return { msg: `Only ${pages} pages found` };
      }

      const users = await User.find()
        .sort({ createdAt: -1 })
        .skip(Math.abs(perPage * page - perPage))
        .limit(perPage);

      return { users, numberOfUser, pages, currentPage: page };
    } catch (err) {
      console.error(err.message);
      return [];
    }
  };

  // Search User By FirstName and Age
  findUserByUsernameAndAge = async (
    username: string,
    age: number
  ): Promise<IUser[]> => {
    const searchWord: any = new RegExp(username, "gi");

    try {
      const users: IUser[] = await User.find({
        $and: [{ firstName: searchWord }, { age }]
      });
      return users;
    } catch (err) {
      console.error(err.message);
      return [];
    }
  };

  // Search User By Many Field
  findUsersByAnyField = async (searchKey: string): Promise<IUser[] | null> => {
    const searchWord: any = new RegExp(searchKey, "gi");
    try {
      const user: IUser[] = await User.find({
        $or: [
          { firstName: searchWord },
          { age: searchWord },
          { phone: searchWord },
          { skills: searchWord }
        ]
      });
      return user;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  };
}
