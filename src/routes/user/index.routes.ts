import { Router } from "express";
import { addUserRoute } from './addUser';
import { addUserValidateArray } from '../../middlewares/userValidator/addUserValidatorArray';
import bodyValidator from "../../middlewares/bodyValidator";
import { searchUserRoute } from './searchUsers';
import { findAllUsersRoute } from './findAllUser';
import { getUser } from './findUser';
import { updateUser } from './editUser';
import { deleteUser } from './deleteUser';

const router = Router()

router.get('/firstName=:firstName&age=:age', searchUserRoute);
router.get('/perPage=:perPage&page=:page', findAllUsersRoute);
router.get('/:id', getUser);
router.post('/', addUserValidateArray, bodyValidator, addUserRoute);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


export default router
