import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import checkAuth from "./utils/checkAuth.js";
import errorValidation from "./utils/errorValidation.js";
import {
  loginValidation,
  registerValidation,
  todoCreateValidation,
} from "./validations.js";
import { login, register } from "./controllers/UserController.js";
import { create, getAll, remove } from "./controllers/TodoController.js";

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://ivanyukandrei:admin@todo.dobl3zs.mongodb.net/todo")
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

app.post("/auth/login", loginValidation, login);
app.post("/auth/register", registerValidation, errorValidation, register);

app.post("/todo", checkAuth, todoCreateValidation, errorValidation, create);
app.get("/todo/:id", getAll);
app.delete("/todo/:id", remove);

app.listen("7777", (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
