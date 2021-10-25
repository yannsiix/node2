//YANN BAKARY

let categoryArray = ["1", "2", "3", "4"];

//Exporter la fonction charger de CREER
//
exports.createCategory = ((req, res) => {
    const category = req.body.categoryToAdd;
    categoryArray.push({
        '_id': categoryArray.length + 1,
        'category': category,
        'createAt': Date.now(),
        'lastUpdate': Date.now(),
    })
    res.send({
        'success': true,
        'message': "Category created",
        'data': []
    });
});


//Exporter la fonction charger de Faire le GET
exports.getCategory = ((req, res) => {
    res.send({
        'success': true,
        'data': []
    });
});


//Exporter la fonction charger de SUPPRIMER
//
exports.deleteCategory = ((req, res) => {
    const idToDelete = req.params.id;
    categoryArray.splice(idToDelete, 1);
    res.send({
        'success': true,
        'message': "Category deleted",
        'data': []
    });
});


//Exporter la fonction charger de MODIFIER
//
exports.updateCategory = ((req, res) => {
    const idToUpdate = req.params.id;
    categoryArray[idToUpdate] = req.body.categoryToUpdate;
    res.send({
        'success': true,
        'message': "Category updated",
        'data': []
    });
});