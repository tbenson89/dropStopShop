const express   = require('express'),
      cors      = require('cors'),
      bodyParse = require('body-parser'),
      mongoose  = require('mongoose'),
      app       = express();

let corsOption = { origin: "http://localhost:8081" };

app.use(cors(corsOption));

// parse reqs of content-type - application/json
app.use(bodyParse.json());

// parse reqs of content-type - application/x-ww/form-urlencoded
app.use(bodyParse.urlencoded({ extended: true }));

const db = require('./app/models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the DB!");
  })
  .catch(err => {
    console.log("There was a problem with the DB_Connection!" + err);
    process.exit();
  });

// Simple Route
app.get("/get" , (req , res) => {
  res.json({ message: "Welcome to the Drop Stop Shop Application!" })
});

require('./app/routes/item.routes.js');

// Set Port, Listen for Requests
const PORT = process.env.PORT || 8080;
app.listen(PORT , () => {
  console.log(`DSS_Server is running on ${PORT}.`);
});
