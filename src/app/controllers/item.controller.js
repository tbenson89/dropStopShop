const db    = require('../models'),
      Item  = db.items;

// Create and Save a New Item
exports.create = (req, res) => {
  // Validate REQ
  if (!req.body.title) {
    res.status(400).send({ message: "Content Cannot Be Empty!" });
  }

  // Create an Item
  const item = new Item({
    title: req.body.title,
    imgSrc: req.body.imgSrc,
    price: req.body.price,
    description: req.body.description
  });

  // Save The Item
  item
    .save(item)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Whoops, An Error has Infected the System!'
      });
    });
};

// Get all Items from the DB
exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title ? { title: { $regex: new RegExp(title), $options: 'i' } }: {};

  Item.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Whoops, An Error has Infected the System!'
      });
    });
};

// Find Item by ID
exports.findItem = (req, res) => {
  const id = req.params.id;

  Item.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: 'No Item Found with ID of ' + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: 'Error finding Item with ID of ' + id });
    });
};

// Update Item by ID
exports.update = (req , res) => {
 if(!req.body) {
   return res.status(400).send({
     message: 'Item to Update can not be empty!'
   });
 }

 const id = req.params.id;

 Item.findByIdAndUpdate(id, req.body, { useFindAndModify: true })
   .then(data => {
     if (!data) {
       res.status(404).send({
         message: 'Cannot update Item with id= ${ id }. There may have been an issue ' +
           'Finding the Item in the Database. . .'
       });
     } else res.send({ message: 'Item was updated successfully!' });
   })
   .catch(err => {
     res.status(500).send({
       message: 'Error updating Item with id= ' + id
     });
   });
};

// Delete an Item by ID
exports.delete = (req, res) => {
  const id = req.params.id;

  Item.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: 'Cannot delete Item with ID= ${ id } We may not be able to find ' +
            'in the Database. . .'
        });
      } else {
        res.send({
          message: 'Item was deleted successfully!'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete Item with ID= ' + id
      });
    });
};


