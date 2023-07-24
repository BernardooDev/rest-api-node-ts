import { Router } from "express";
import { StatusCodes } from "http-status-codes"

import { CitiesController } from "../controllers/cities"

const router = Router()

router.get("/", (req, res) => {
    res.send("teste")
})

router.post("/", CitiesController.create)

router.put("/", (req, res) => {

})

router.delete("/", (req, res) => {

})

export { router };