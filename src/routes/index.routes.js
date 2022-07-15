import { Router } from 'express'
import Task from '../models/Task'

const router = Router()


router.get('/', async (req, res) => {
    
    const tasks = await Task.find().lean();
    
    
    res.render('index', {tasks: tasks});

})

router.post('/tasks/add', async (req, res) => {
   try {
     
    const task =  Task(req.body)  

    await task.save()
    res.redirect('/')
   }catch (err) {
    console.log(err)
   }
   
})

router.get('/about', (req, res) => {
    res.render('about', {message: 'About'});
})

router.get('/edit', (req, res) => {
    res.render('edit', {message: 'Edit'});
})


export default router;