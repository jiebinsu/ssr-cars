import { Router } from "express";
import homeController from "./compositions/home/controller";

const router = Router();

router.get("/*", homeController);

export default router;
