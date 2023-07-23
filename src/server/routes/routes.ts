import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    res.send("teste")
})

router.post("/", (req, res) => {
    res.send("post")
})

router.put("/", (req, res) => {

})

router.delete("/", (req, res) => {

})

export { router };