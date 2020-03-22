import { DeleteUser } from '../../database/user/DeleteUser';
import { Request, Response } from 'express';
import { FindUser } from '../../database/user/FindUser';

const findUser = new FindUser()
const removeUser = new DeleteUser()


export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        let message = "User Deleted"
        const { id } = req.params

        const user = await findUser.findUserById(id)

        if (!user) {
            return res.status(404).json({ errors: [{ msg: "Invalid User Id" }] })
        }
        const isDeleted = await removeUser.deleteUserById(id)

        if (!isDeleted) {
            message = "Something went wrong, Please Try Again later"
        }

        return res.status(200).json({ message })


    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
    }
}