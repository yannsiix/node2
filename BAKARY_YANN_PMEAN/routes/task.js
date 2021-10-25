//Declaration des constantes
const express = require('express');

const router = express.Router();

module.exports = router;


const { createTask, getTask, deleteTask, updateTask } = require('../controler/task');

router.route('/')
    .get(getTask)
    .post(createTask);

router.route('/:id')
    .delete(deleteTask)
    .put(updateTask);