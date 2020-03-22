import { model } from "mongoose";
import { UserType } from '../../models/Users';

const User = model<UserType>('users')

export class DeleteUser {
    // Delete User By Id
    deleteUserById = async (_id: string): Promise<boolean> => {
        try {
            await User.findByIdAndDelete(_id)
            return true
        } catch (err) {
            console.error(err.message);
            return false
        }
    }
}