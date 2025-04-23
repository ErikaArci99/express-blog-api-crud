const express = require('express');
const router = express.Router();

// creo le nuove rotte

// index
router.get('/', (req, res) => {
    res.send('Lista dei post');
});

// show
router.get('/:id', (req, res) => {
    res.send('Dettagli del post ' + req.params.id);
});

// store
router.post('/', (req, res) => {
    res.send('Creazione nuovo post');
});

// update
router.put('/:id', (req, res) => {
    res.send('Modifica integrale del post ' + req.params.id);
});

// modify
router.patch('/:id', (req, res) => {
    res.send('Modifica parziale del post ' + req.params.id);
});

// destroy
router.delete('/:id', (req, res) => {
    res.send('Eliminazione del post ' + req.params.id);
});

//  esporto le rotte in app.js
module.exports = router;