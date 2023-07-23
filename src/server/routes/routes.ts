import { Router } from "express";
import { StatusCodes } from "http-status-codes"

const router = Router()

router.get("/", (req, res) => {
    res.send("teste")
})

router.post("/", (req, res) => {
    console.log(req.query)
    res.status(StatusCodes.CREATED).send("ok")
})

router.put("/", (req, res) => {

})

router.delete("/", (req, res) => {

})

export { router };