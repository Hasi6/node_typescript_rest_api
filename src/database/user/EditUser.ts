import { model } from "mongoose";
import { UserType, IUser } from '../../models/Users';
import { FindUser } from './FindUser';

const User = model<UserType>('users')
const findUser = new FindUser()

export class EditUser {
    // Edit User
    editUser = async (_id: string, body: IUser): Promise<IUser | null> => {
        try {
            await User.updateOne({ _id }, { $set: body })

            const user = await findUser.findUserById(_id)
            return user

        } catch (err) {
            console.error(err.message);
            return null
        }
    }
}