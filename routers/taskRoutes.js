import express from "express";
import * as taskhController from "../controllers/taskController.js";
import checkAuth from "../middlewares/checkAuth.js";
import checkAdmin from "../middlewares/checkAdmin.js";
const router = express.Router();

router.use(checkAuth);

router.post("/task", taskhController.createTask);

router.get("/task", taskhController.getTasksByUserId);
router.get("/task/all ", checkAdmin, taskhController.getAllTasks);
router.get("/task/:id", taskhController.getTask);
router.get("/task/:id", taskhController.updateTask);
router.delete("/task/:id", taskhController.deleteTask);


export default router;

