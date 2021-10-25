const express = require('express');

const router = express.Router();

module.exports = router;

const { createCategory, getCategory, deleteCategory, updateCategory } = require('../controler/categories');

router.route('/')
    .get(getCategory)
    .post(createCategory);

router.route('/:id')
    .delete(deleteCategory)
    .put(updateCategory);