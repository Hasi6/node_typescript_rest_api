import { FindUser } from "../../database/user/FindUser";
import { Request, Response } from 'express';

const findUser = new FindUser()

export const searchUserRoute = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { firstName, age } = req.params
        const users = await findUser.findUserByUsernameAndAge(firstName, parseInt(age))
        return res.status(200).json({ users })

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
    }
}