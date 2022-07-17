import { Router } from "express";

// Controllers
import {
  renderTask,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  doneTask,
} from "../controllers/taks.controller";

const router = Router();

// Routes
router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toggleDone", doneTask);

// About
router.get("/about", (req, res) => {
  res.render("about", { message: "About" });
});

export default router;
