import { Router } from "express";
import * as controller from "../controllers/index";

export const index = Router();

index.get(["/", "/:id"], [
    //TODO: add middleware to validate before send response.
    controller.GET
]);

index.post("/", [
    //TODO: add middleware to validate incoming request payload.
    controller.POST
]);

index.put("/:id", [
    //TODO: add middleware to validate incoming request payload.
    controller.PUT
]);

index.patch("/:id", [
    //TODO: add middleware to validate incoming request payload.
    controller.PATCH
]);

index.delete("/:id", [
    //TODO: add middleware to validate before delete.
    controller.DELETE
]);