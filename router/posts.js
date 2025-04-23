const express = require('express');
const router = express.Router();

// creo le nuove rotte

// importo il controller
const postController = require('../controllers/postController.js')

// index
router.get('/', postController.index);

// show
router.get('/:id', postController.show);

// store
router.post('/', postController.store);

// update
router.put('/:id', postController.update);

// modify
router.patch('/:id', postController.modify);

// destroy
router.delete('/:id', postController.destroy);

//  esporto le rotte in app.js
module.exports = router;