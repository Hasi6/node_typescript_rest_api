import { Request, Response } from 'express';
import { FindUser } from '../../database/user/FindUser';
import { EditUser } from '../../database/user/EditUser';


const findUser = new FindUser()
const editUser = new EditUser()

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params

        const body = req.body

        const { gender } = body

        delete body.email
        delete body._id

        if (gender !== "male" && gender !== "female" && gender !== "other") {
            return res.status(404).json({ errors: [{ msg: "Gender is Invalid, Enter male, female or other" }] })
        }


        const user = await findUser.findUserById(id)

        if (!user) {
            return res.status(404).json({ errors: [{ msg: "Invalid User Id" }] })
        }

        const editedUser = await editUser.editUser(id, body)
        return res.status(200).json({ editedUser })

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
    }
}