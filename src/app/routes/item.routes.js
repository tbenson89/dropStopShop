module.exports = app => {
  const items = require('../controllers/item.controller.js');

  let router = require('express').Router();

  // Create New Item
  router.post('/shop/items/item/:id', items.create);

  // Get ALL Items
  router.get('/shop/items/findAll', items.findAll);

  // Find Item By ID
  router.get('/shop/items/item/:id', items.findOne);

  // Update Item by ID
  router.put('/shop/items/item/:id', items.update);

  // Delete Item by ID
  router.delete('/shop/items/item/:id', items.delete);

  app.use('/api/inventory/', router);
};
