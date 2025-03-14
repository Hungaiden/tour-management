import { Express } from "express";
import { toursRoute } from "./tours.router";

export const routesClient = (app: Express) => {
  app.use("/tours", toursRoute);
}