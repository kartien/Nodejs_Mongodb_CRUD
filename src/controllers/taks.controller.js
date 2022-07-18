import Task from "../models/Task";



// Task Index
export const renderTask = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};

// Render tasks on tasks 
export const getTasks = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("tasks", { tasks: tasks });
}

// Create a new Task
export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/tasks");
  } catch (err) {
    console.log(err);
  }
};

// Render Edit a Task consult fot data on database
export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();

    res.render("edit", { task: task });
  } catch (err) {
    console.log(err.message);
  }
};

// Render Edit Task
export const editTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/tasks");
};

// Render Delete Task
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/tasks");
};

// Render Done Task
export const doneTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/tasks");
};
