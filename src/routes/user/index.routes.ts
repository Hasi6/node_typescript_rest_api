import { Router } from "express";
import { addUserRoute } from './addUser';
import { addUserValidateArray } from '../../middlewares/userValidator/addUserValidatorArray';
import bodyValidator from "../../middlewares/bodyValidator";

const router = Router()


router.post('/addUser', addUserValidateArray, bodyValidator, addUserRoute)


export default router
