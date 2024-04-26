import express from "express";

import { todoTasks } from "../data/todoTasks";

const router = express.Router();

let totalHandledTasks = todoTasks.length;

router.get("/all", (req, res) => {
  res.send(todoTasks);
});

router.get("/task/:id", (req, res) => {
  const id = req.params.id;
  const filteredTask = todoTasks.filter((x) => x.id.toString() === id);
  let result;
  if (filteredTask.length > 0) {
    [result] = filteredTask;
  } else {
    new Error("coulnt find task");
  }
  res.send(result);
});

router.post("/task", (req, res) => {
  const newTaskBody = req.body;
  const newId = totalHandledTasks + 1;
  const today = new Date();
  const task = {
    taskId: newId,
    ...newTaskBody,
    isComplete: false,
    createdAt: today,
  };
  totalHandledTasks++
  todoTasks.push(task);
  res.send(task);
});

router.patch("/task/:id", (req, res, next) => {
  const newFields = req.body;
  let index;
  for (let i = 0; i < todoTasks.length; i++) {
    if (todoTasks[i].taskId === newFields.taskId) {
      index = i;
      break;
    }
  }
  if (index === undefined) {
    res.statusCode === 400 &&
      send({
        message: `User with id ${newFields.id} not found`,
      });
    next();
  }

  todoTasks[index] = {
    ...todoTasks[index],
    ...newFields,
  };
});

router.delete("/task/:id", (req, res, next) => {
  const taskToDeleteId = req.params.id;
  let indexToDelete;

  for (let i = 0; i < todoTasks.length; i++) {
    const element = todoTasks[i];
    if (element.taskId.toString() === taskToDeleteId) {
      indexToDelete = i;
      break;
    }
  }

  if (indexToDelete === undefined) {
    res.statusCode === 400 &&
      send({
        message: `Task with id ${taskToDeleteId} not found`,
      });
    next();
  }

  todoTasks.splice(indexToDelete, 1);
  totalHandledTasks++
  res.send("successfully deleted task");
});

export default router;
