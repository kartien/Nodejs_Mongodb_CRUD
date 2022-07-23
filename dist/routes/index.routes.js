"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _taks = require("../controllers/taks.controller");

// Controllers
var router = (0, _express.Router)(); // Routes

router.get("/", _taks.renderTask);
router.post("/tasks/add", _taks.createTask);
router.get("/tasks/:id/edit", _taks.renderTaskEdit);
router.post("/tasks/:id/edit", _taks.editTask);
router.get("/tasks/:id/delete", _taks.deleteTask);
router.get("/tasks/:id/toggleDone", _taks.doneTask); // tasks

/*router.get("/tasks", (req, res) => {
  res.render("tasks")
})*/

router.get("/tasks", _taks.getTasks);
var _default = router;
exports["default"] = _default;