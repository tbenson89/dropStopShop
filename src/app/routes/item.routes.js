module.exports = app => {
  const items = require('../controllers/item.controller.js');

  let router = require('express').Router();

  // TODO: routes are not being reached ! https://youtu.be/ia3iFUk7yjU?t=373
  router.get('/test' , (req, res)  => {
    res.send('You have reached the Applications API Endpoints')
  })
  // Create New Item
  router.post('/products/item/:id', items.create);

  // Get ALL Items
  router.get('/products/item/findAll', items.findAll);

  // Find Item By ID
  router.get('/products/item/:id', items.findItem);

  // Update Item by ID
  router.put('/products/item/:id', items.update);

  // Delete Item by ID
  router.delete('/products/item/:id', items.delete);

  app.use(router);
};
