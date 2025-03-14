import express, { Router } from "express";
const router: Router = express.Router();

import * as controller from "../../controllers/client/tours.controller";

router.get("/", controller.index);



export const toursRoute = router;