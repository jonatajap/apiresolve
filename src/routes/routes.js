import express from "express";

const routes = express.Router();

routes.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

export default routes;
