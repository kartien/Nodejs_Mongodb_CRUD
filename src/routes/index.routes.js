import { Router } from 'express'

const router = Router()


router.get('/', (req, res) => {
    res.render('index', {message: 'Home'});
})

router.get('/about', (req, res) => {
    res.render('about', {message: 'About'});
})

router.get('/edit', (req, res) => {
    res.render('edit', {message: 'Edit'});
})


export default router;