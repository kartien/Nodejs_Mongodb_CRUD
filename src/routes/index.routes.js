import { Router } from 'express'

const router = Router()

router.get("/", (req, res) => {
    res.render('index.hbs')
})

router.get("/about", (req, res) => {
    res.send("About")
})



export default router 