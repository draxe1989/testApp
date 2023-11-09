import {Router} from "express";
import enumsController from "../controllers/enums";
import listController from "../controllers/list";

const router = Router()

router.get("/sizes", enumsController.sizes)
router.get("/drinkCounts", enumsController.drinkCountes)
router.get("/list", listController.get)

export default router