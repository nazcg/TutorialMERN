const express = require('express');
const task = require('../models/task');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) =>{
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
})

router.post('/', async (req, res) =>{
    const {title, description} = req.body;
    const task = new task({
        title,
        description
    });
    await task.save();
    res.json({status: 'Tarea guardada'});
});

router.put('/:id', async (req, res) =>{
    const{title, description}=req.body;
    const newTask = {title, description};
    await task.findByIdAndUpdate(req.params.id, newTask)
    res.json({status: 'tarea actualizada'});
});

module.exports = router;