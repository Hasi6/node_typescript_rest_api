import { Router } from "express";
import { addUserRoute } from './addUser';
import { addUserValidateArray } from '../../middlewares/userValidator/addUserValidatorArray';
import bodyValidator from "../../middlewares/bodyValidator";
import { searchUserRoute } from './searchUsers';
import { findAllUsersRoute } from './findAllUser';

const router = Router()

router.get('/firstName=:firstName&age=:age', searchUserRoute)
router.get('/allUsers/perPage=:perPage&page=:page', findAllUsersRoute)
router.post('/addUser', addUserValidateArray, bodyValidator, addUserRoute)


export default router
