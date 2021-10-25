let taskArray = ["1", "2", "3", "4"];


//create task
exports.createTask = ((req, res) => {
    const task = req.body.taskToAdd;
    taskArray.push({
        '_id': taskArray.length + 1,
        'task': task,
        'createAt': Date.now(),
        'lastUpdate': Date.now(),
    })
    res.send({
        'success': true,
        'message': "Task created",
        'data': []
    });
});


//getTASK
exports.getTask = ((req, res) => {
    res.send({
        'success': true,
        'data': taskArray
    });
});


//Delete task
exports.deleteTask = ((req, res) => {
    const idToUpdate = req.params.id;
    console.log(idToUpdate);
    taskArray.splice(idToUpdate, 1);
    res.send({
        'success': true,
        'message': "Task deleted",
        'data': []
    });
});


// modifier task
exports.updateTask = ((req, res) => {
    const idToUpdate = req.params.id;
    taskArray[idToUpdate] = req.body.taskToUpdate;
    res.send({
        'success': true,
        'message': "Task updated",
        'data': []
    });
});