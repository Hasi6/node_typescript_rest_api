import { model } from "mongoose";
import { UserType, IUser } from '../../models/Users';

const User = model<UserType>('users')

export class FindUser {
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
}