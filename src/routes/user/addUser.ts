import { Request, Response } from 'express';
import { FindUser } from '../../database/user/FindUser';
import { IUser } from '../../models/Users';
import { SaveUser } from '../../database/user/SaveUser';



const findUser = new FindUser()
const saveUser = new SaveUser()

export const addUserRoute = async (req: Request, res: Response): Promise<Response> => {

    const { email, firstName,
        image,
        age,
        height,
        gender, } = req.body

    if (gender !== "male" && gender !== "female" && gender !== "other") {
        return res.status(404).json({ errors: [{ msg: "Gender is Invalid, Enter male, female or other" }] })
    }


    try {
        const user = await findUser.findUserByEmail(email)

        // If User Found On That Email Send Email Found Message
        if (user) {
            return res.status(404).json({ errors: [{ msg: "Email Already Taken" }] })
        }

        const newUser: any = {
            email,
            age,
            firstName,
            image,
            height: parseFloat(height),
            gender,

        }

        const response = await saveUser.saveUserInDatabase(newUser)
        return res.status(201).json({ newUser: response })



    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
    }
}