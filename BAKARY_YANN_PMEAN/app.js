//YANN BAKARY

//Constante
const express = require('express');

//variables
const PORT = 4500;
const app = express();

//Middleware
app.use(express.json());

// Route
app.get('/', (req, res) => {
    res.send('Initial Point');
});


//Catégories
const category = require("./routes/categories");
app.use('/categories', category);

//Task , taches 
const task = require('./routes/task');
app.use('/task', task);

// listener Ecoute

app.listen(PORT, () => {
    console.log('App listen on port' + PORT);
});