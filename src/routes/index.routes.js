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

router.get('/edit/:id', async (req, res) => {
    
    try {
        const task =  await Task.findById(req.params.id).lean()
    
        res.render('edit', {task: task});
    } catch (err) {
        console.log(err.message)
    }
})

router.post('/edit/:id', async (req, res) => {
     
    const {id} = req.params;

    await  Task.findByIdAndUpdate(id, req.body)
    
    res.redirect('/')
})


export default router;