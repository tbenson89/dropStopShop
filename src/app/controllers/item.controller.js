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

// Find One by ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  // TODO stopped here https://youtu.be/ia3iFUk7yjU
  // Item.findById(id)
  //   .then(data => {
  //     if (!da)
  //   })
};
