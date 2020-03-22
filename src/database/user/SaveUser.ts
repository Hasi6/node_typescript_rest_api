import { model } from "mongoose";
import { UserType, IUser } from '../../models/Users';

const User = model<UserType>('users')


export class SaveUser {

    // Save User In Database
    saveUserInDatabase = async (user: IUser): Promise<IUser | null> => {
        try {
            const newUser = new User(user)
            await newUser.save()
            return newUser
        } catch (err) {
            console.error(err.message);
            return null
        }
    }
}