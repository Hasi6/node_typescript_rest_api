import { Router } from "express";
import { addUserRoute } from "./addUser";
import bodyValidator from "../../middlewares/bodyValidator";
import { searchUserRoute } from "./searchUsers";
import { findAllUsersRoute, findDefaultUser } from "./findAllUser";
import { getUser } from "./findUser";
import { updateUser } from "./editUser";
import { deleteUser } from "./deleteUser";

const router = Router();

router.get("/firstName=:firstName&age=:age", searchUserRoute);
router.get("/perPage=:perPage&page=:page", findAllUsersRoute);
router.get("/", findDefaultUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
