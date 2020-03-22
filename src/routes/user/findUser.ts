import { Response, Request } from 'express';
import { FindUser } from '../../database/user/FindUser';

const findUser = new FindUser()

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params
        const user = await findUser.findUserById(id)

        if (!user) {
            return res.status(404).json({ errors: [{ msg: "Invalid User Id" }] })
        }

        return res.status(200).json({ user })

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
    }
} 