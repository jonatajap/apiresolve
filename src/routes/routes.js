import { UserController } from "../app/controllers/user-controller.js";
import express from "express";

const routes = express.Router();

routes.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

const userController = new UserController();
routes.post("/users/store", userController.store.bind(userController));

export default routes;
