import { application, Router } from "express";

// Controllers
import {
  renderTask,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  doneTask,
  getTasks,
} from "../controllers/taks.controller";

const router = Router();

// Routes
router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toggleDone", doneTask);

// tasks
/*router.get("/tasks", (req, res) => {
  res.render("tasks")
})*/
router.get("/tasks", getTasks);

export default router;
